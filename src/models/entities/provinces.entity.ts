import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model, HasMany } from 'sequelize-typescript';
import District from './districts.entity';

@Table({
  tableName: 'provinces',
})
export default class Province extends Model<Province> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string;

  @Column
  fullName: string;

  @HasMany(() => District)
  district: District[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
