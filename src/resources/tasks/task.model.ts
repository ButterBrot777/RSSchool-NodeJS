/**
 * Task model
 * @module task/model
 */

const { v4: uuidv4 } = require('uuid');
export interface ITask {
  id?: string;
  title?: string;
  order?: string;
  description?: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
}
/**
 * Task instance
 * @typedef {Object} Task
 * @property {String} id id
 * @property {String} title title
 * @property {String} order order
 * @property {String} description description
 * @property {String} userId user id
 * @property {String} boardId board id
 * @property {String} columnId column id
 */
export class Task {
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 'Order',
    description = 'Description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  }: ITask = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
