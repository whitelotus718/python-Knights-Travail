'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shows', [
      {
        userId: 1,
        artistName: "U2",
        date: "02-28-2021",
        genre: "Rock",
        city: "New York",
        price: 10000,
        partySize: 200,
        title: "See U2 Live",
        info: "Exerience U2",
        imageURL: "https://ibb.co/cJ5Nfwn",
        rating: 5,
        youtubeURL: "https://youtu.be/e3-5YC_oHjE",        
      },
      {
        userId: 2,
        artistName: "Flume",
        date: "02-29-2021",
        genre: "Electronic",
        city: "Richmond",
        price: 5000,
        partySize: 150,
        title: "See Flume Live",
        info: "Exerience Flume",
        imageURL: "https://ibb.co/cN24k8S",
        rating: 4,
        youtubeURL: "https://youtu.be/_ADZq3fyw9k"
      },
      {
        userId: 3,
        artistName: "Coldplay",
        date: "03-01-2021",
        genre: "Alternative",
        city: "London",
        price: 15000,
        partySize: 250,
        title: "See Coldplay Live",
        info: "Exerience Coldplay",
        imageURL: "https://ibb.co/ckxxJnm",
        rating: 3,
        youtubeURL: "https://youtu.be/NoeyCHJ_lZk"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shows', {
    }, {});
  }
};
