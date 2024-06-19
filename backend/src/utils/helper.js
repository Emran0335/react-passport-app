const bcryptjs = require("bcryptjs");

const saltRounds = 10;

/*
// syncronous functions
export const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync(saltRounds);
  return bcryptjs.hashSync(password, salt);
};

export const comparePassword = (plainPass, hashedPass)=> {
  return bcryptjs.compareSync(plainPass, hashedPass)
}
*/

// asyncronous functions
const hashPassword = async (password) => {
  const salt = await bcryptjs.genSalt(saltRounds);
  console.log(salt);
  return await bcryptjs.hash(password, salt);
};

const comparePassword = async (plainPass, hashedPass) => {
  return await bcryptjs.compare(plainPass, hashedPass);
};

module.exports = { hashPassword, comparePassword };
