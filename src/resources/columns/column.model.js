/**
 * Column model
 * @module column/model
 * @ignore
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Column instance
 * @typedef {Object} Column
 * @property {String} id column id
 * @property {String} title column title
 * @property {String} order column order
 */
class Column {
    constructor({ id = uuidv4(), title = 'ColumnTitle', order = 'Order' } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}

module.exports = Column;
