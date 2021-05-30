/**
 * User repository
 * @module user/repository
 */

const DB = require('../../common/DB');

/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
const getAll = async () => DB.getAllUsers();

/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
const getByID = async id => {
  const user = await DB.getUserByID(id);
  if (!user) {
    throw new Error(`User with id ${id} was not found`);
  }
  return user;
};

/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const create = async user => DB.createUser(user);

/**
 * To update some user data
 * @param {String} id user id
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const update = async (id, body) => {
  const userFromDB = await DB.getUserByID(id);
  if (!userFromDB) {
    throw new Error(`User with id ${id} was not found`);
  }

  await DB.updateUser(userFromDB, body);

  const updatedUser = await DB.getUserByID(id);
  return updatedUser;
};

/**
 * To delete some user
 * @param {String} id user id
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const remove = async id => {
  const user = await DB.getUserByID(id);

  if (!user) {
    throw new Error(`User with id ${id} was not found`);
  }

  const userToRemove = { ...user};
  await DB.removeUser(userToRemove);
  return userToRemove;
};

module.exports = { getAll, getByID, create, update, remove };
