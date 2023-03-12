import { JwtCachePayload, JwtPayload } from '@/types/types.d.';
import { ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { timeStamp } from 'console';
import { LoginDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async validateUser(username: string, password: string) {
    const userResult = await this.userService.findUserByUserName(username);
    if (userResult.length === 0) return null;
    const hasValidPassword = await bcrypt.compare(
      password,
      userResult[0].password,
    );
    if (userResult.length === 0) {
      throw new NotAcceptableException("Couldn't find the user");
    }
    if (userResult && hasValidPassword) {
      return userResult;
    }
    return null;
  }

  async tokenDecode  (refreshToken:string){
    const promise: any = this.jwtService.decode(refreshToken);
    this.jwtService.verifyAsync(refreshToken, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
    if(promise) {
      return promise
    }
    return null;
  }

  async getTokens(userId: string, username: string, role: string) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          name: username,
          role,
        },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<number>('JWT_EXPIRE'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          name: username,
          role,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<number>('JWT_R_EXPIRE'),
        },
      ),
    ]);
    const data = JSON.stringify({
      name: username,
      role: role,
      access_token: access_token,
      refresh_token: refresh_token,
    });
    await this.cacheManager.set(userId.toString(), data);
    return { access_token, refresh_token, name: username, role };
  }
  async refreshTokens(refreshToken: string) {
    const promise: any = this.jwtService.decode(refreshToken);
    this.jwtService.verifyAsync(refreshToken, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
    console.log(promise)
    if (promise) {
      const user: JwtCachePayload = await this.cacheManager
        .get(promise.sub)
        .then((promise: any) => JSON.parse(promise));
      if (!user || !user.refresh_token)
        throw new ForbiddenException('Access Denied');
      const isRefreshTokenMatches = bcrypt.compare(
        user.refresh_token.toString(),
        refreshToken.toString(),
      );
      if (!isRefreshTokenMatches)
        throw new ForbiddenException('Access Denied!');
      const tokens = await this.getTokens(
        promise.sub,
        promise.name,
        promise.role,
      );
      return tokens;
    }
    throw new ForbiddenException('Token Expired');
  }
  async logout(refreshToken: string) {
    const promise: any = this.jwtService.decode(refreshToken);
    this.jwtService.verifyAsync(refreshToken, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
    if (promise) {
      await this.cacheManager.del(promise.sub);
      return 'User Logout';
    }
    throw new NotFoundException('User not found');
  }

  async login(userLoginDetails: LoginDto) {
    const userResult = await this.userService.findUserByUserName(
      userLoginDetails.username,
    );
    const tokens = await this.getTokens(
      //@ts-ignore
      userResult[0]._id,
      userResult[0].username,
      userResult[0].role,
    );
    return tokens;
  }
}
