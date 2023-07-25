const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class Address extends Model {}

Address.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     
      region: {
        type: DataTypes.ENUM,
        values: ["Andijon", "Buxoro", "Farg'ona", "Jizzax", "Xorazm", "Namangan", "Navoiy", "Qashqadaryo", "Qoraqalpog'iston", "Samarqand", "Sirdaryo", "Surxondaryo", "Toshkent", "Toshkent shahri"],
        defaultValue: "Buxoro",
        allowNull:false
      },
      district: {
        type: DataTypes.ENUM,
        values: ["Buxoro shahri", "G'ijduvon tuman", "Jondor tuman", "Kogon tuman", "Qorako'l tuman", "Qorovulbozor tuman", "Romitan tuman", "Shofirkon tuman", "Vobkent tuman", "Buxoro viloyati"],
        defaultValue: "Shofirkon tuman",
        allowNull:false
      }},{
        timestamps: false,
        tableName: "address",
        sequelize, // We need to pass the connection instance
        modelName: "Address", // We need to choose the model name
      }
);


module.exports=Address
