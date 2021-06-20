/**
 * User repository
 * @module user/repository
 */
// import * as DB from '../../common/db/db';
import { User } from './user.model';
import { Task } from '../tasks/task.model';

/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 */
// const getAll = async (): Promise<User[]> => DB.getAllUsers();
const getAll = async (): Promise<User[]> => User.find();

/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
const getByID = async (id: string): Promise<User> => {
  // const user = await DB.getUserByID(id);
  const user = await User.findOne(id);
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
// const create = async (user: User): Promise<User | undefined> => DB.createUser(user);
const create = async (user: User) => {
  const newUser = new User(user);
  await newUser.save();
  return newUser;
};
/**
 * To update some user data
 * @param {String} id user id
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const update = async (id: string, body: User): Promise<User | undefined> => {
  // const userFromDB = await DB.getUserByID(id);
  const userFromDB = await User.findOne(id);
  if (!userFromDB) {
    throw new Error(`User with id ${id} was not found`);
  }

  // await DB.updateUser(userFromDB, body);

  // const updatedUser = await DB.getUserByID(id);
  // return updatedUser;
  await User.update(id, body);
  return User.findOne(id);
};

/**
 * To delete some user
 * @param {String} id user id
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const remove = async (id: string): Promise<User> => {
  // const user = await DB.getUserByID(id);
  const user = await User.findOne(id);

  if (!user) {
    throw new Error(`User with id ${id} was not found`);
  }

  // await DB.removeUser(user);
  // return user;

  await user.remove();
  const updateTasks = await Task.find({ userId: id });
  updateTasks.forEach(task => {
    task.remove();
  });
  return user;
};

export { getAll, getByID, create, update, remove };
