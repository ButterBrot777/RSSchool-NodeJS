/**
 * Board service
 * @module boards/service
 */
import * as boardsRepo from './board.memory.repository';
import { IBoard } from './board.model';

/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
const getAll = (): Promise<IBoard[]> => boardsRepo.getAll();

/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
const getByID = (id: string): Promise<IBoard> => boardsRepo.getByID(id);

/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
const create = (board: IBoard): Promise<IBoard | undefined> => boardsRepo.create(board);

/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const update = (id: string, body: IBoard): Promise<IBoard> => boardsRepo.update(id, body);

/**
 * To delete some board
 * @param {String} id board id
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const remove = async (id: string): Promise<IBoard> => boardsRepo.remove(id);

export { getAll, getByID, create, update, remove };
