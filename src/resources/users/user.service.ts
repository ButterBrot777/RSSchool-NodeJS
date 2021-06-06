/**
 * User service
 * @module users/service
 */
import { User } from './user.model';
import * as usersRepo from './user.memory.repository'

/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
const getAll = (): Promise<User[]> => usersRepo.getAll();

/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
const getByID = (id: string): Promise<User> => usersRepo.getByID(id);

/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const create = (user: User): Promise<User | undefined> => usersRepo.create(user);

/**
 * To update some user data
 * @param {String} id user id
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const update = (id: string, body: User): Promise<User | undefined> => usersRepo.update(id, body);

/**
 * To delete some user
 * @param {String} id user id
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const remove = (id: string): Promise<User> => usersRepo.remove(id);

export { getAll, getByID, create, update, remove };
