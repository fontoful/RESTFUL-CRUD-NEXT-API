const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

// TODO: notice that opposed to the Users.js models file, this one defines Tracks as plural... 🤔 human error, maybe?
const Tracks = sequelize.define(
  'tracks',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artist_name: {
      type: DataTypes.STRING,
    },
    artist_nickname: {
      type: DataTypes.STRING,
    },
    artist_nationality: {
      type: DataTypes.STRING,
    },
    duration_start: {
      type: DataTypes.INTEGER,
    },
    duration_end: {
      type: DataTypes.INTEGER,
    },
    mediaId: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true },
);

module.exports = Tracks;
