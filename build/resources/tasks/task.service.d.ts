import { Task } from './task.model';
/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
declare const getAll: (boardId: string) => Promise<Task[]>;
/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
declare const getByID: (id: string) => Promise<Task>;
/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
declare const create: (boardId: string, body: Task) => Promise<Task | undefined>;
/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
declare const update: (id: string, body: Task) => Promise<Task>;
/**
 * To delete task
 * @param {String} id task id
 * {@link module:task/repository}
 */
declare const remove: (id: string) => Promise<Task[]>;
export { getAll, getByID, create, update, remove };
