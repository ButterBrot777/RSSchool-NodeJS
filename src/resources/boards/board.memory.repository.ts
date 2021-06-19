/**
 * Board repository
 * @module board/repository
 */
import * as DB from '../../common/db/db';
import { Board } from './board.model';

const createError = require('http-errors')

/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
const getAll = async (): Promise<Board[]> => DB.getAllBoards();

/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
const getByID = async (id: string): Promise<Board> => {
  const board = await DB.getBoardByID(id);
  if (!board) {
    throw new createError.NotFound();
  }
  return board;
};

/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
const create = async (board: Board): Promise<Board | undefined> => DB.createBoard(board);

/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const update = async (id: string, body: Board): Promise<Board> => {
  const dbBoards = await DB.getBoardByID(id);
  if (!dbBoards) {
    throw new createError.NotFound();
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
