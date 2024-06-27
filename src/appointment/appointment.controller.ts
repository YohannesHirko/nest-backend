import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { AppointmentDto } from './dto/appointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private service: AppointmentService) {}
  @Post('add')
  add(@Body() appointmentDto: AppointmentDto) {
    return this.service.add(appointmentDto);
  }
  @UseGuards(JwtGuard)
  @HttpCode(200)
  @Get('get')
  get() {
    return this.service.get();
  }
}
