/**
 * Column model
 * @module column/model
 * @ignore
 */
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
export declare class Column {
    id: string;
    title: string;
    order: string;
    constructor({ id, title, order }?: {
        id?: any;
        title?: string | undefined;
        order?: string | undefined;
    });
}
