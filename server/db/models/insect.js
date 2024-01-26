"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          capital(value) {
            let words = value.split(" ");
            words.forEach((word) => {
              let firstLetter = word[0];
              // console.log('\n\nhey look\n\n', firstLetter, '\n\nhey look\n\n');
             let secnod=  firstLetter.toLowerCase();
              if (firstLetter===secnod) {
                throw new Error("have to be Capitalized");
              }
            });
          },
          notEmpty: true,
        },
      },
      description: DataTypes.STRING,
      territoty: DataTypes.STRING,
      fact: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 240],
        },
      },
      millimeters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
           
        },
      },
    },
    {
      sequelize,
      modelName: "Insect",
    }
  );
  return Insect;
};
