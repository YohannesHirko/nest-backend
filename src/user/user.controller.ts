import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Post('create')
  async createPost() {
    return 'hi';
  }
}
