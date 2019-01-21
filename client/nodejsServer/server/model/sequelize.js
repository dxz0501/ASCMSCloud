"use strict";
const Sequelize = require('sequelize');
const databaseConfig = require('../../config/database.json')

const sequelize = new Sequelize(databaseConfig.databaseName, databaseConfig.userName, databaseConfig.password, {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    protocol: databaseConfig.dialect,
    port: databaseConfig.port,
    // 字段以下划线（_）来分割（默认是驼峰命名风格）
    underscored: true,
    timezone: databaseConfig.timezone,
    timestamps: false, // 这个参数为true是MySQL会自动给每条数据添加createdAt和updateAt字段
    dialectOptions: {
      ssl: databaseConfig.ssl,
      operatorsAliases: false
    }
  });
  
  module.exports = sequelize;