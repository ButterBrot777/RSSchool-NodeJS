/**
 * User service
 * @module users/service
 */
const usersRepo = require('./user.memory.repository');

/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
const getAll = () => usersRepo.getAll();

/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
const getByID = id => usersRepo.getByID(id);

/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const create = user => usersRepo.create(user);

/**
 * To update some user data
 * @param {String} id user id
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const update = (id, body) => usersRepo.update(id, body);

/**
 * To delete some user
 * @param {String} id user id
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const remove = id => usersRepo.remove(id);

module.exports = { getAll, getByID, create, update, remove };
