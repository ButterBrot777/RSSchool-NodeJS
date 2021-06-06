/**
 * Task repository
 * @module task/repository
 */
import * as DB from '../../common/DB';
import { Task } from './task.model';

const createError = require('http-errors')

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
const getAll = async (boardId: string):Promise<Task[]> => DB.getAllTasks(boardId);

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getByID = async (id: string): Promise<Task> => {
  const task = await DB.getTaskByID(id);
  if (!task) {
    throw new createError.NotFound();
  }
  return task;
};

/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const create = async (boardId: string, body: Task): Promise<Task | undefined> => DB.createTask(boardId, body);

/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const update = async (id: string, body: Task): Promise<Task> => {
  const dbTask = await DB.updateTask(id, body);
  if (!dbTask) {
    throw new createError.NotFound();
  }
  return dbTask;
};

/**
 * To delete task
 * @param id task id
 * @returns {Promise<Task>} task one task
 * {@link module:task/repository}
 */
const remove = async (id: string): Promise<Task[]> => {
  const dbTask = await DB.removeTask(id);
  if (!dbTask) {
    throw new createError.NotFound();
  }
  return dbTask;
};

export { getAll, getByID, create, update, remove };
