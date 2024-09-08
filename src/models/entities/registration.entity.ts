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
} from 'sequelize-typescript';
import Patient from './patients.entity';

@Table({
  tableName: 'registrations',
})
export default class Registration extends Model<Registration> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  relationship: string;

  @Column
  @ForeignKey(() => Patient)
  patientId: number;

  @BelongsTo(() => Patient)
  patient: Patient;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
