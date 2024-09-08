import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model, HasMany } from 'sequelize-typescript';
import DoctorSpecialtyClinic from './doctor_specialty_clinic.entity';

@Table({
  tableName: 'specialties',
})
export default class Specialty extends Model<Specialty> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  image: string;

  @Column
  description: string;

  @HasMany(() => DoctorSpecialtyClinic)
  doctorSpecialtyClinic: DoctorSpecialtyClinic[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
