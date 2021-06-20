/**
 * Task model
 * @module task/model
 */
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

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
@Entity({name: 'Task'})
export class Task extends BaseEntity implements ITask {
  @PrimaryColumn('varchar', {length: 100})
  id: string;

  @Column('varchar', {length: 100})
  title: string;

  @Column('varchar', {length: 100})
  order: string;

  @Column('varchar', {length: 100})
  description: string;

  @Column({ type: 'varchar', nullable: true })
  boardId: string | null;

  @Column('varchar', {length: 100})
  columnId: string | null;

  @Column({ type: 'varchar', nullable: true })
  userId: string | null;

  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 'Order',
    description = 'Description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  }: ITask = {}) {
    super();
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
