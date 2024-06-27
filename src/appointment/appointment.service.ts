import { Injectable } from '@nestjs/common';
import { AppointmentDto } from './dto/appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  async add(dto: AppointmentDto) {
    try {
      const appointment = await this.prisma.appointment.create({
        data: {
          name: dto.name,
          email: dto.email,
          phone: dto.phone,
          clinic: dto.clinic,
          date: dto.date,
          time: dto.time,
          problem: dto.problem,
          message: dto.message,
        },
      });
      console.log(appointment);
      return { message: 'succesfully added', appointment: appointment };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async get() {
    const appointments = await this.prisma.appointment.findMany();
    return appointments;
  }
}
