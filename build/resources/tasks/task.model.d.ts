/**
 * Task model
 * @module task/model
 */
import { BaseEntity } from 'typeorm';
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
export declare class Task extends BaseEntity implements ITask {
    id: string;
    title: string;
    order: string;
    description: string;
    boardId: string | null;
    columnId: string | null;
    userId: string | null;
    constructor({ id, title, order, description, userId, boardId, columnId }?: ITask);
}
