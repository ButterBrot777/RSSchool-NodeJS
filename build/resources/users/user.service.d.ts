/**
 * User service
 * @module users/service
 */
import { User } from './user.model';
/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
declare const getAll: () => Promise<User[]>;
/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
declare const getByID: (id: string) => Promise<User>;
/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
declare const create: (user: User) => Promise<User | undefined>;
/**
 * To update some user data
 * @param {String} id user id
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
declare const update: (id: string, body: User) => Promise<User | undefined>;
/**
 * To delete some user
 * @param {String} id user id
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
declare const remove: (id: string) => Promise<User>;
export { getAll, getByID, create, update, remove };
