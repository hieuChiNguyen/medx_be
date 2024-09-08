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
  HasMany,
} from 'sequelize-typescript';
import Province from './provinces.entity';
import Ward from './wards.entity';

@Table({
  tableName: 'districts',
})
export default class District extends Model<District> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string;

  @Column
  fullName: string;

  @Column
  @ForeignKey(() => Province)
  provinceId: string;

  @BelongsTo(() => Province)
  province: Province;

  @HasMany(() => Ward)
  ward: Ward[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
