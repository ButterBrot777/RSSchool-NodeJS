/**
 * Database
 * @module common/DB
 */

const { v4: uuidv4 } = require('uuid');

/**
 * User instance
 * @typedef {Object} User
 * @ignore
 * @property {String} id user id
 * @property {String} name user name
 * @property {String} login user login
 * @property {String} password user password
  */
import { User } from '../resources/users/user.model';

/**
 * Board instance
 * @typedef {Object} Board
 * @ignore
 * @property {String} id board id
 * @property {String} title board title
 * @property {Array<Column>} columns some array of Column instances
 */
import { Board } from '../resources/boards/board.model';

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
import { Task } from "../resources/tasks/task.model";

/**
 * Database as an object
 * @type {Object}
 * @property {Array<User>} array of Users
 * @property {Array<Board>} array of Boards
 * @property {Array<Task>} array of Tasks
  */
const DB: {
  users: User[];
  boards: Board[];
  tasks: Task[];
} = {
  users: [],
  boards: [],
  tasks: []
};

/* #region create db with empty instances */
DB.users.push(new User(), new User(), new User());
const customBoard = new Board();
DB.boards.push(customBoard);
DB.tasks.push(
  new Task({ boardId: (customBoard.id = uuidv4()) }),
  new Task({ boardId: (customBoard.id = uuidv4()) }),
  new Task({ boardId: (customBoard.id = uuidv4()) })
);
/* #endregion */

/**
 * To remove all tasks belongs to concrete user
 * @param {String} userId user id
 */
function removeUserTasks(userId: string): void {
  DB.tasks.forEach((task, index) => {
    if (task.userId === userId) {
      DB.tasks[index] = { ...task, userId: null }
    }
  });
}

/**
 * To remove all tasks on concrete board
 * @param {String} boardId board id
 */
function removeBoardTasks(boardId: string): void {
  const newTasks = DB.tasks.filter(task => task.boardId !== boardId);
  DB.tasks = newTasks;
}

// actions for users

/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
const getAllUsers = async (): Promise<User[]> => DB.users.slice(0);

/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
const getUserByID = async (id: string): Promise<User | undefined> => DB.users.filter(user => user.id === id)[0];

/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const createUser = async (user: User): Promise<User | undefined> => {
  DB.users.push(user);
  return getUserByID(user.id!);
};

/**
 * To update some user data
 * @param {User} dbUser user instance
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
const updateUser = async (dbUser: User, body: User): Promise<User | undefined> => {
  const userIndex = DB.users.findIndex(user => user.id === dbUser.id);

  DB.users[userIndex]!.name = body.name;
  DB.users[userIndex]!.login = body.login;
  DB.users[userIndex]!.password = body.password;

  return DB.users[userIndex]!;
};

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
const removeUser = async (user: User): Promise<void> => {
  const userIndex: number = DB.users.findIndex(userUnit => userUnit.id === user.id);
  const lastUser = DB.users.pop();
  if (DB.users.length > 0 && lastUser !== user) {
    DB.users[userIndex] = lastUser!;
  }
  removeUserTasks(user.id!);
};

// action for boards

/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
const getAllBoards = async (): Promise<Board[]> => DB.boards.slice(0);

/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
const getBoardByID = async (id: string): Promise<Board | undefined> => DB.boards.filter(board => board.id === id)[0];

/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
const createBoard = async (board: Board): Promise<Board | undefined> => {
  DB.boards.push(board);
  return getBoardByID(board.id!);
};

/**
 * To update some board data
 * @param {String} dbBoard board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
const updateBoard = async (dbBoard: Board, body: Board): Promise<Board | undefined> => {
  return Object.assign(dbBoard, {...body});

  // const boardIndex: number = DB.boards.findIndex(board => board.id === dbBoard.id);
  // DB.boards[boardIndex]!.title = body.title
  //   ? body.title
  //   : DB.boards[dbBoard.id].title!;
  // DB.boards[boardIndex]!.columns = body.columns
  //   ? body.columns
  //   : DB.boards[dbBoard.id].columns;
  //
  // return DB.boards[boardIndex];
};

/**
 * To delete some board
 * @param {Board} board instance
 * @returns {Promise<void>} promise, one board
 * {@link module:board/repository}
 */
const removeBoard = async (board: Board): Promise<void> => {
  const boardIndex = DB.boards.findIndex(
    boardElem => boardElem.id === board.id
  );
  const lastBoard = DB.boards.pop();
  if (DB.boards.length > 0 && lastBoard !== board) {
    DB.boards[boardIndex] = lastBoard!;
  }
  removeBoardTasks(board.id!);
};

// actions for tasks

/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Array<Task>} array of tasks on concrete board
 * {@link module:task/repository}
 */
const getAllTasks = (boardId: string): Task[] => DB.tasks.filter((task) => task.boardId === boardId);

/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
const getTaskByID = async (id: string): Promise<Task | undefined> => DB.tasks.filter(task => task.id === id)[0];

/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Task} one task
 * {@link module:task/repository}
 */
const createTask = (boardId: string, body: Task): Task | undefined => {
  const id = uuidv4();
  const newTask = new Task({ ...body, id, boardId });
  DB.tasks.push(newTask);
  return DB.tasks.filter((task) => task.id === id)[0];
};

/**
 * Forwards new props to be applied to task on board
 * @param {String} taskId task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
const updateTask = async (taskId: string, body: Task): Promise<Task | undefined> => {
  const taskIndex = DB.tasks.findIndex(task => task.id === taskId);
  DB.tasks[taskIndex] = {
    ...body,
    id:taskId
  }

  return DB.tasks[taskIndex];
};

/**
 * To delete task
 * @param id task id
 * @returns {Array<Task>} array of tasks
 * {@link module:task/repository}
 */
const removeTask = async (id:string): Promise<Task[]> => {
  const taskIndex = DB.tasks.findIndex(taskElem => taskElem.id === id);
  return DB.tasks.splice(taskIndex, 1);
};

export {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  removeUser,
  getAllBoards,
  getBoardByID,
  createBoard,
  updateBoard,
  removeBoard,
  getAllTasks,
  getTaskByID,
  createTask,
  updateTask,
  removeTask
};
