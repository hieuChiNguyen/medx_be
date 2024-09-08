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
import Specialty from './specialties.entity';
import Clinic from './clinics.entity';
import Doctor from './doctors.entity';

@Table({
  tableName: 'doctors_specialties_clinics',
})
export default class DoctorSpecialtyClinic extends Model<DoctorSpecialtyClinic> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Specialty)
  specialtyId: number;

  @Column
  @ForeignKey(() => Doctor)
  doctorId: number;

  @Column
  @ForeignKey(() => Clinic)
  clinicId: number;

  @BelongsTo(() => Specialty)
  specialty: Specialty;

  @BelongsTo(() => Doctor)
  doctor: Doctor;

  @BelongsTo(() => Clinic)
  clinic: Clinic;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
