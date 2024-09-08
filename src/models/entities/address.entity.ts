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
import Province from './provinces.entity';
import District from './districts.entity';
import Ward from './wards.entity';
import Patient from './patients.entity';

@Table({
  tableName: 'address',
})
export default class Address extends Model<Address> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Province)
  provinceId!: number;

  @Column
  @ForeignKey(() => District)
  districtId!: number;

  @Column
  @ForeignKey(() => Ward)
  wardId!: number;

  @Column
  @ForeignKey(() => Patient)
  patientId!: number;

  @BelongsTo(() => Province)
  province: Province;

  @BelongsTo(() => District)
  district: District;

  @BelongsTo(() => Ward)
  ward: Ward;

  @BelongsTo(() => Patient)
  patient: Patient;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
