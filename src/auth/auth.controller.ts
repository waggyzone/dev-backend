import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LoginDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { RefreshTokenGuard } from './refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async Login(@Body() userLoginDetails: LoginDto) {
    return await this.authService.login(userLoginDetails);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('/refresh')
  async ValidateLogin(@Req() request: Request) {
    const refresh_token = request
      .get('Authorization')
      .replace('Bearer', '')
      .trim();
    return await this.authService.refreshTokens(refresh_token);
  }
  @Get('/logout')
  async Logout(@Req() request: Request) {
    const refresh_token = request
      .get('Authorization')
      .replace('Bearer', '')
      .trim();
    return await this.authService.logout(refresh_token);
  }


}


