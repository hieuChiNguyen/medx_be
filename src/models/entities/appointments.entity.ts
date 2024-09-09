import {
  Column,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
  HasOne,
} from 'sequelize-typescript';
import Patient from './patients.entity';
import { AppointmentStatusEnum } from '@enum/appointment-status.enum';
import Result from './results.entity';
import Doctor from './doctors.entity';

@Table({
  tableName: 'appointments',
})
export default class Appointment extends Model<Appointment> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Patient)
  patientId: number;

  @Column
  @ForeignKey(() => Doctor)
  doctorId!: number;

  @Column
  time: Date;

  @Column(DataType.ENUM({ values: Object.values(AppointmentStatusEnum) }))
  status: string;

  @Column
  reason: string;

  @BelongsTo(() => Patient)
  patient: Patient;

  @BelongsTo(() => Doctor)
  doctor: Doctor;

  @HasOne(() => Result)
  result: Result;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
