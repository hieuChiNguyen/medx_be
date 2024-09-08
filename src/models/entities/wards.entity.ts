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
import District from './districts.entity';

@Table({
  tableName: 'wards',
})
export default class Ward extends Model<Ward> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string;

  @Column
  fullName: string;

  @Column
  @ForeignKey(() => District)
  districtId: string;

  @BelongsTo(() => District)
  district: District;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
