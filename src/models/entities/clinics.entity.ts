import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model, HasMany } from 'sequelize-typescript';
import DoctorSpecialtyClinic from './doctor_specialty_clinic.entity';
import Receptionist from './receptionists.entity';

@Table({
  tableName: 'clinics',
})
export default class Clinic extends Model<Clinic> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  address: string;

  @Column
  image: string;

  @Column
  description: string;

  @HasMany(() => DoctorSpecialtyClinic)
  doctorSpecialtyClinic: DoctorSpecialtyClinic[];

  @HasMany(() => Receptionist)
  receptionist: Receptionist[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
