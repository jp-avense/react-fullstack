import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'todos',
})
export class Todos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status!: boolean;

  // @CreatedAt
  // creationDate!: Date;

  // @UpdatedAt
  // updatedOn!: Date;

  @Column({
    type: DataType.DATE,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt!: Date;
}
