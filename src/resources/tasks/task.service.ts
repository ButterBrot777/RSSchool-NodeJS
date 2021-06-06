/**
 * Task service
 * @module task/service
 */
import * as tasksRepo from './task.memory.repository';
import { Task } from './task.model';

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
const getAll = (boardId: string): Promise<Task[]> => tasksRepo.getAll(boardId);

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getByID = (id: string): Promise<Task> => tasksRepo.getByID(id);
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
const create = (boardId: string, body: Task) => tasksRepo.create(boardId, body);

/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const update = (id: string, body: Task) => tasksRepo.update(id, body);

/**
 * To delete task
 * @param {String} id task id
 * {@link module:task/repository}
 */
const remove = (id: string): Promise<Task[]> => tasksRepo.remove(id);

export {getAll, getByID, create, update, remove};
