/**
 * Board repository
 * @module board/repository
 */
import * as DB from '../../common/DB';
import { IBoard } from './board.model';
/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
const getAll = async (): Promise<IBoard[]> => DB.getAllBoards();

/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
const getByID = async (id: string): Promise<IBoard> => {
  const board = await DB.getBoardByID(id);
  if (!board) {
    throw new Error(`Board with id ${id} was not found`);
  }
  return board;
};

/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
const create = async (board: IBoard): Promise<IBoard | undefined> => DB.createBoard(board);

/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const update = async (id: string, body: IBoard): Promise<IBoard> => {
  const dbBoards = await DB.getBoardByID(id);
  if (!dbBoards) {
    throw new Error(`Board with id ${id} was not found`);
  }

  await DB.updateBoard(dbBoards, body);
  const updatedBoard = await getByID(id);
  return updatedBoard;
};

/**
 * To delete some board
 * @param {String} id board id
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const remove = async (id: string) => {
  const dbBoards = await DB.getBoardByID(id);
  if (!dbBoards) {
    throw new Error(`Board with id ${id} was not found`);
  }

  await DB.removeBoard(dbBoards);
  return dbBoards;
};

export { getAll, getByID, create, update, remove };
