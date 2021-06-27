import { Board } from './board.model';
/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
declare const getAll: () => Promise<Board[]>;
/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
declare const getByID: (id: string) => Promise<Board>;
/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
declare const create: (board: Board) => Promise<Board | undefined>;
/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
declare const update: (id: string, body: Board) => Promise<Board | undefined>;
/**
 * To delete some board
 * @param {String} id board id
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
declare const remove: (id: string) => Promise<Board>;
export { getAll, getByID, create, update, remove };
