const { Validator } = require('sequelize');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    userId: {
      type: DataTypes.INTEGER, 
      allowNull:false
    },
    artistName: {type: DataTypes.STRING, allowNull:false},
    date: {type: DataTypes.STRING, allowNull:false},
    genre: {type: DataTypes.STRING, allowNull:false},
    city: {type: DataTypes.STRING, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    partySize: {type: DataTypes.INTEGER, allowNull:false},
    title: {type: DataTypes.TEXT, allowNull:false},
    info: {type: DataTypes.TEXT, allowNull:false},
    imageURL: {type: DataTypes.STRING, allowNull:false},
    rating: {type: DataTypes.INTEGER, allowNull:false},
    youtubeURL: {type: DataTypes.STRING, allowNull:false}
  }, {});
  Show.associate = function(models) {
    // associations can be defined here
    Show.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Show;
};