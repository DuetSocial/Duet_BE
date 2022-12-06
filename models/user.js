"use strict"
const { Model } = require("sequelize")
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
        foreignKey: "user_id",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      User.hasMany(models.Genre, {
        foreignKey: "user_id",
        as: "genre",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      User.hasMany(models.Artist, {
        foreignKey: "user_id",
        as: "artist",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      name: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      photo: DataTypes.STRING,
      genreInterest: DataTypes.TEXT,
      artistInterest: DataTypes.TEXT,
      commentId: DataTypes.INTEGER,
      liked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  )
  return User
}

//will need to update both front end register to set back the photo/image url to the model
//edit the payload (might be in auth controller or another auth file). payload should username
//
