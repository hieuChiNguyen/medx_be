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
import Clinic from './clinics.entity';

@Table({
  tableName: 'receptionists',
})
export default class Receptionist extends Model<Receptionist> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  username!: string;

  @Column
  password!: string;

  @Column
  email!: string;

  @Column
  @ForeignKey(() => Clinic)
  clinicId: number;

  @BelongsTo(() => Clinic)
  clinic: Clinic;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
