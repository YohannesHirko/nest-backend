import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signin(@Body() authDto: AuthDto) {
    return this.authService.signup(authDto);
  }
  @Post('signin')
  signup(@Body() authDto: AuthDto) {
    return this.authService.signin(authDto);
  }
}