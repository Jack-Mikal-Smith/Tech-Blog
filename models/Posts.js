const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Posts',
    }
);

module.exports = Posts;