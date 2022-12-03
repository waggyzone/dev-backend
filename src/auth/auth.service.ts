import { Injectable, NotAcceptableException } from '@nestjs/common';
import { LoginDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
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

  async login(userLoginDetails: LoginDto) {
    const userResult = await this.userService.findUserByUserName(
      userLoginDetails.username,
    );
    const payload = { name: userResult[0].username, sub: userResult[0]._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


