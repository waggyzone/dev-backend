import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async Login(@Body() userLoginDetails: LoginDto) {
    return await this.authService.login(userLoginDetails);
  }
}
