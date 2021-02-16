const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  hashPassword: async (password) => bcrypt.hash(password, saltRounds),
  compareHash: async (plainTextPassword, hashedPassword) =>
    bcrypt.compare(plainTextPassword, hashedPassword),
};
