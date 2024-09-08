import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model } from 'sequelize-typescript';

@Table({
  tableName: 'admins',
})
export default class Admin extends Model<Admin> {
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

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
