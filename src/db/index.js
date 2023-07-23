const config = require("../shared/config");
const Sequalize = require("sequelize");

const sequelize = new Sequalize({
  database: config.db.name,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  dialect: "postgres",
  username: config.db.user,
});
module.exports = sequelize;
