'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trip.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    trip_by_user: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    trip_with_boat: {
      type: DataTypes.UUID,
      references: {
        model: 'boats',
        key: 'id'
      }
    },
    trip_start_time: {
      type: DataTypes.DATE
    },
    trip_end_time: {
      type: DataTypes.DATE
    },
    trip_start_location: {
      type: DataTypes.STRING
    },
    trip_end_location: {
      type: DataTypes.STRING
    },
    trip_title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};
