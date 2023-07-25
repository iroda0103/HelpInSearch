const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../../db");

class Findings extends Model {}

Findings.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["found", "lost"],
        allowNull: false,
      },
      user_id:{
        type:DataTypes.INTEGER,
        references:{
          model:"users",
          key:"id"
        },
        onDelete:"CASCADE",
        allowNull:false
      },
      address_id:{
        type:DataTypes.INTEGER,
        references:{
          model:"address",
          key:"id"
        },
        onDelete:"SET NULL",
        allowNull:false
      },
      img:{
        type:DataTypes.STRING,
        allowNull:false
      },
      address_addition:{
        type:DataTypes.STRING,
      }
  },
  {
    timestamps: false,
    tableName: "findings",
    sequelize, // We need to pass the connection instance
    modelName: "Finding", // We need to choose the model name
  }
);

// the defined model is the class itself
// console.log(User === sequelize.models.User); 

module.exports=Findings
