/**
 * Board service
 * @module boards/service
 */
const boardsRepo = require('./board.memory.repository');

/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
const getAll = () => boardsRepo.getAll();

/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
const getByID = id => boardsRepo.getByID(id);

/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
const create = board => boardsRepo.create(board);

/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const update = (id, body) => boardsRepo.update(id, body);

/**
 * To delete some board
 * @param {String} id board id
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const remove = id => boardsRepo.remove(id);

module.exports = { getAll, getByID, create, update, remove };
