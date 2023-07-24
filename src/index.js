const express = require("express");
const sequelize = require("./db/index");
const config = require("./shared/config");
const router=require('./routes')
const User=require('./modules/users/Model')

User.findAll().then((users)=>{
    console.log('dsds',users[0].dataValues);
})

const app = express();
app.use(express.json());
app.use(router)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(config.port, () => {
  console.log(config.port + " da ishladi");
});


