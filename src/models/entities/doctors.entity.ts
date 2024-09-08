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
  HasMany,
} from 'sequelize-typescript';
import Position from './positions.entity';
import DoctorSpecialtyClinic from './doctor_specialty_clinic.entity';

@Table({
  tableName: 'doctors',
})
export default class Doctor extends Model<Doctor> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  fullName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  phone: string;

  @Column
  birthday: Date;

  @Column
  active: boolean;

  @Column
  avatar: string;

  @Column
  citizenNumber: string;

  @Column
  description!: string;

  @Column
  @ForeignKey(() => Position)
  positionId: number;

  @BelongsTo(() => Position)
  position: Position;

  @HasMany(() => DoctorSpecialtyClinic)
  doctorSpecialtyClinic: DoctorSpecialtyClinic[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
