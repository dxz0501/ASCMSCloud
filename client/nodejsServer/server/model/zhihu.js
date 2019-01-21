const sequelize = require("./sequelize")
const Sequelize = require('sequelize')

const zhihu = sequelize.define('zhihu', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    url: Sequelize.STRING,
    img: Sequelize.STRING,
    info: Sequelize.TEXT, //STRING无法存储过长数据，因此改用TEXT
    content_img: Sequelize.STRING,
    author_img: Sequelize.STRING,
    author: Sequelize.STRING,
});

zhihu.sync();
module.exports = zhihu;