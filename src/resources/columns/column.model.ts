/**
 * Column model
 * @module column/model
 * @ignore
 */

const {v4: uuidv4} = require('uuid');

export interface IColumn {
    id?: string;
    title?: string;
    order?: string;
}

/**
 * Column instance
 * @typedef {Object} Column
 * @property {String} id column id
 * @property {String} title column title
 * @property {String} order column order
 */
export class Column {
    id: string;

    title: string;

    order: string;

    constructor({id = uuidv4(), title = 'ColumnTitle', order = 'Order'} = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
