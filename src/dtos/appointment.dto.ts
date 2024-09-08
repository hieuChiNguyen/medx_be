import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { IsAlreadyExist } from '@decorators/is.exist.decorator';
import Patient from '@models/entities/patients.entity';
import { PaginationQueryDto } from './pagination.dto';
import { Type } from 'class-transformer';
import Appointment from '@models/entities/appointments.entity';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsAlreadyExist(Patient, 'email')
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phone: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  time: Date;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @IsString()
  reason: string;
}

export class GetAppointmentDto extends PaginationQueryDto {}

export class GetDetailAppointmentDto {
  @IsNotEmpty()
  @IsNumber()
  @IsAlreadyExist(Appointment, 'id')
  @Type(() => Number)
  appointmentId: number;
}

export class CreateAppointmentForOtherDto extends CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  relationship: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  patientId: number;
}
