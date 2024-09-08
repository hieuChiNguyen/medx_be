import {
  Column,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  Model,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import Address from './address.entity';
import Registration from './registration.entity';

@Table({
  tableName: 'patients',
})
export default class Patient extends Model<Patient> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  fullName: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  gender: string;

  @Column
  birthday: Date;

  @Column
  avatar!: string;

  @Column
  identifyId!: string;

  @HasOne(() => Address)
  address: Address;

  @HasMany(() => Registration)
  registration: Registration;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
