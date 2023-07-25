const { BadRequestError } = require("../../shared/errors");
const { Op } = require("sequelize");
const User = require("./Model");

const addUser = async (data) => {

  const item=await User.findOne({ where: {
    [Op.or]: [
      { username: data.username },
      { phone: data.phone }
    ]
  }})

  if(item){
    throw new BadRequestError('Bunday element mavjud')
  }

  const user = await User.create(data, { returning: "*" });


  return user
};

module.exports=addUser
