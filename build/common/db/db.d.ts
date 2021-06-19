/**
 * Database
 * @module common/DB
 */
/**
 * User instance
 * @typedef {Object} User
 * @ignore
 * @property {String} id user id
 * @property {String} name user name
 * @property {String} login user login
 * @property {String} password user password
  */
import { User } from '../../resources/users/user.model';
/**
 * Board instance
 * @typedef {Object} Board
 * @ignore
 * @property {String} id board id
 * @property {String} title board title
 * @property {Array<Column>} columns some array of Column instances
 */
import { Board } from '../../resources/boards/board.model';
/**
 * Task instance
 * @typedef {Object} Task
 * @ignore
 * @property {String} id task id
 * @property {String} title task title
 * @property {String} description task description
 * @property {String} userId id of user
 * @property {String} boardId id of board
 * @property {String} columnId id of column
 * @property {String} order some order
 */
import { Task } from "../../resources/tasks/task.model";
/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
declare const getAllUsers: () => Promise<User[]>;
/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
declare const getUserByID: (id: string) => Promise<User | undefined>;
/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
declare const createUser: (user: User) => Promise<User | undefined>;
/**
 * To update some user data
 * @param {User} dbUser user instance
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
declare const updateUser: (dbUser: User, body: User) => Promise<User | undefined>;
/**
 *
 * @param user
 * @returns {Promise<void>}
 */
/**
 * To delete some user
 * @param {User} user instance
 * @returns {Promise<void>} promise, one user
 * {@link module:user/repository}
 */
declare const removeUser: (user: User) => Promise<void>;
/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
declare const getAllBoards: () => Promise<Board[]>;
/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
declare const getBoardByID: (id: string) => Promise<Board | undefined>;
/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
declare const createBoard: (board: Board) => Promise<Board | undefined>;
/**
 * To update some board data
 * @param {String} dbBoard board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
declare const updateBoard: (dbBoard: Board, body: Board) => Promise<Board | undefined>;
/**
 * To delete some board
 * @param {Board} board instance
 * @returns {Promise<void>} promise, one board
 * {@link module:board/repository}
 */
declare const removeBoard: (board: Board) => Promise<void>;
/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Array<Task>} array of tasks on concrete board
 * {@link module:task/repository}
 */
declare const getAllTasks: (boardId: string) => Task[];
/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
declare const getTaskByID: (id: string) => Promise<Task | undefined>;
/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Task} one task
 * {@link module:task/repository}
 */
declare const createTask: (boardId: string, body: Task) => Task | undefined;
/**
 * Forwards new props to be applied to task on board
 * @param {String} taskId task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
declare const updateTask: (taskId: string, body: Task) => Promise<Task | undefined>;
/**
 * To delete task
 * @param id task id
 * @returns {Array<Task>} array of tasks
 * {@link module:task/repository}
 */
declare const removeTask: (id: string) => Promise<Task[]>;
export { getAllUsers, getUserByID, createUser, updateUser, removeUser, getAllBoards, getBoardByID, createBoard, updateBoard, removeBoard, getAllTasks, getTaskByID, createTask, updateTask, removeTask };
