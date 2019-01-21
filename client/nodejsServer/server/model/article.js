const sequelize = require("./sequelize")
const Sequelize = require('sequelize')

const article = sequelize.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    info: Sequelize.STRING,
    name: Sequelize.STRING,
    pic: Sequelize.STRING,
    date: Sequelize.DATE,
});

article.sync();
module.exports = article;