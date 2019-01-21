const sequelize = require("./sequelize")
const Sequelize = require('sequelize')

const video = sequelize.define('video', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    num: Sequelize.STRING,
    title: Sequelize.STRING,
    url: Sequelize.STRING,
    name: Sequelize.STRING,
    duration: Sequelize.STRING,
    date: Sequelize.DATE,
});

video.sync();
module.exports = video;