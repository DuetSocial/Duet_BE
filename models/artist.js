'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'artist',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Artist.init({
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    liked: DataTypes.BOOLEAN,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists'
  });
  return Artist;
};