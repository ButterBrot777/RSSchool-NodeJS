import { BaseEntity } from 'typeorm';
import { Column } from '../columns/column.model';
export interface IBoard {
    id?: string;
    title?: string;
    columns?: Column[];
}
/**
 * Creates board
 * @type {Board}
 * @param {Object} object containing board
 * @param {String} board id (auto-generated by uuid by default)
 * @param {String} board title
 * @param {Array<Column>} board columns
 */
export declare class Board extends BaseEntity implements IBoard {
    id: string;
    title: string;
    columns: Array<Column>;
    constructor({ id, title, columns }?: {
        id?: any;
        title?: string | undefined;
        columns?: Column[] | undefined;
    });
}
