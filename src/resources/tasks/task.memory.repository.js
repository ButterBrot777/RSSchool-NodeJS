/**
 * Task repository
 * @module task/repository
 */
const DB = require('../../common/DB');

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
const getAll = async (boardId) => DB.getAllTasks(boardId);

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getByID = async id => {
  const task = await DB.getTaskByID(id);
  if (!task) {
    throw new Error(`Task with id ${id} was not found`);
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
const create = async (boardId, body) => DB.createTask(boardId, body);

/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const update = async (id, body) => {
  const dbTask = await DB.updateTask(id, body);
  if (!dbTask) {
    throw new Error(`Task with id ${id} was not found`);
  }
  return dbTask;
};

/**
 * To delete task
 * @param id task id
 * @returns {Promise<Task>} task one task
 * {@link module:task/repository}
 */
const remove = async id => {
  const dbTask = await DB.removeTask(id);
  if (!dbTask) {
    throw new Error(`Task with id ${id} was not found`);
  }
  return dbTask;
};

module.exports = { getAll, getByID, create, update, remove };
