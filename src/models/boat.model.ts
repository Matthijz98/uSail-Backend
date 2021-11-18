import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Boat } from '@interfaces/boat.interface';

export type BoatCreationAttributes = Optional<Boat, 'id' | 'name' | 'image'>;

export class UserModel extends Model<Boat, BoatCreationAttributes> implements Boat {
  public id: number;
  public name: string;
  public image: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
