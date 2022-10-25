'use strict';
const { Model, STRING } = require("sequelize");

module.exports = function(sequelize, DataTypes){
    class css extends Model {};

    css.init(
        {
            id: {
                field: "id",
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            from_name: {
                field: "from_name",
                type: STRING,
                allowNull: false
            },
            to_name: {
                field: "to_name",
                type: STRING,
                allowNull: false
            },
            type: {
                field: "type",
                type: DataTypes.ENUM("Continue", "Stop"),
                allowNull: false,
                defaultValue: "Continue"
            },
            keyword: {
                field: "keyword",
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                field: "content",
                type: DataTypes.STRING,
                allowNull: true
            },
            start_content: {
                field: "start_content",
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            modelName: "css",
            timestamps: false,
            freezeTableName: true,
            charset: "utf8",
            collate: "utf8_general_ci",
            underscored: true
        }
    );
    return css;
}