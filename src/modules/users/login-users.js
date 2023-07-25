const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../shared/errors');
const config = require('../../shared/config');
const User = require('./Model');

const loginUser = async ({ username, password }) => {
  const existing = await User.findOne({where:{ username,password }});

  if (!existing) {
    throw new UnauthorizedError('Incorrect username or password.');
  }
  
  const token = jwt.sign({ user: { id: existing.id } }, config.jwt.secret);

  return token;
};

module.exports = loginUser;