/**
 * Task service
 * @module task/service
 */
const tasksRepo = require('./task.memory.repository');

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getByID = id => tasksRepo.getByID(id);
// const getByID = (boardId, taskId) => {
//     const res = DB.tasks.filter((task) => task.boardId === boardId && task.id === taskId)[0];
//     return res;
// };

/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const create = (boardId, body) => tasksRepo.create(boardId, body);

/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const update = (id, body) => tasksRepo.update(id, body);

/**
 * To delete task
 * @param {String} id task id
 * {@link module:task/repository}
 */
const remove = id => tasksRepo.remove(id);

module.exports = {getAll, getByID, create, update, remove};
