"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      User.belongsTo(models.Role, { foreignKey: "role_id", as: "roles" });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      firstname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      profile_picture: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "roles", // Table name of the Role model
          key: "id", // Primary key in the Role model
        },
        onUpdate: "CASCADE", // When the related role is updated
        onDelete: "CASCADE", // When the related role is deleted
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      login_ip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );

  return User;
};
