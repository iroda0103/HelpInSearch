const { NotFoundError } = require('../../shared/errors');
const User = require('./Model');

const editUser = async ({ id, ...changes }) => {
  const existing = await User.findOne({where:{id}});

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }
await existing.update({...changes});

await existing.save()
console.log(existing);
  return existing
};

module.exports = editUser;