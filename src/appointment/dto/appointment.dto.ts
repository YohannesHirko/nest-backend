import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AppointmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  phone: string;
  @IsString()
  clinic: string;
  date: string;
  @IsString()
  time: string;
  @IsString()
  problem: string;
  message: string;
}
