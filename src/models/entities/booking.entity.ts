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
} from 'sequelize-typescript';
import Patient from './patients.entity';
import { AppointmentStatusEnum } from '@enum/appointment-status.enum';
import Service from './services.entity';

@Table({
  tableName: 'bookings',
})
export default class Booking extends Model<Booking> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Patient)
  patientId: number;

  @Column
  @ForeignKey(() => Service)
  serviceId: number;

  @Column
  appointmentDate: Date;

  @Column(DataType.ENUM({ values: Object.values(AppointmentStatusEnum) }))
  status: string;

  @BelongsTo(() => Patient)
  patient: Patient;

  @BelongsTo(() => Service)
  service: Service;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
