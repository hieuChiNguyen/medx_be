import { SettingKeyEnum } from '@enum/setting.enum';
import { Table, Column, PrimaryKey, AutoIncrement, Model, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'settings',
})
export default class Setting extends Model<Setting> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column(DataType.ENUM({ values: Object.values(SettingKeyEnum) }))
  key!: string;

  @Column
  value!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
