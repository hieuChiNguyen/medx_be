import {
  Column,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Appointment from './appointments.entity';

@Table({
  tableName: 'results',
})
export default class Result extends Model<Result> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  diagnose: string;

  @Column
  resultFile: string;

  @Column
  @ForeignKey(() => Appointment)
  appointmentId: number;

  @BelongsTo(() => Appointment)
  appointment: Appointment;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
