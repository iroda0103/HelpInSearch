const { NotFoundError } = require("../../shared/errors");
const User = require("./Model");

const removeUser = async ({ id }) => {
    console.log(id);
  const existing = await User.findOne({where:{id}});

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  await User.destroy({
    where: {
      id,
    },
  });

  return existing;
};

module.exports = removeUser;
