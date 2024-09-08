import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model } from 'sequelize-typescript';

@Table({
  tableName: 'services',
})
export default class Service extends Model<Service> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  image: string;

  @Column
  price: string;

  @Column
  description!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
