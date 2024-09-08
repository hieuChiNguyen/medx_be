import { Column, PrimaryKey, Table, CreatedAt, UpdatedAt, AutoIncrement, Model } from 'sequelize-typescript';

@Table({
  tableName: 'positions',
})
export default class Position extends Model<Position> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

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
