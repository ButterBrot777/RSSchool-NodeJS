/**
 * Task repository
 * @module task/repository
 */
// import * as DB from '../../common/db/db';
import { Task } from './task.model';
const { v4: uuidv4 } = require('uuid');

const createError = require('http-errors')

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
// const getAll = async (boardId: string):Promise<Task[]> => DB.getAllTasks(boardId);
const getAll = async (boardId: string):Promise<Task[]> => Task.find({boardId :boardId});

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getByID = async (id: string): Promise<Task> => {
  // const task = await DB.getTaskByID(id);
  const task = await Task.findOne(id)
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
// const create = async (boardId: string, body: Task): Promise<Task | undefined> => DB.createTask(boardId, body);
const create = async (boardId: string, body: Task): Promise<Task | undefined> => {
  const id = uuidv4();
  const newTask = new Task({ ...body, id, boardId });

  await newTask.save();
  return newTask;
}
/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const update = async (id: string, body: Task): Promise<Task | undefined> => {
  // const dbTask = await DB.updateTask(id, body);
  const dbTask = await Task.findOne(id);

  if (!dbTask) {
    throw new createError.NotFound();
  }
  await Task.update(id, body);
  // return dbTask;
  return Task.findOne(id);
};

/**
 * To delete task
 * @param id task id
 * @returns {Promise<Task>} task one task
 * {@link module:task/repository}
 */
const remove = async (id: string): Promise<Task[]> => {
  // const dbTask = await DB.removeTask(id);
  const dbTask = await Task.findOne(id);
  if (!dbTask) {
    throw new createError.NotFound();
  }
  await dbTask.remove();
  return Task.find();
};

export { getAll, getByID, create, update, remove };
