'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Genre, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Artist, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    genreInterest: DataTypes.TEXT,
    artistInterest: DataTypes.TEXT,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};