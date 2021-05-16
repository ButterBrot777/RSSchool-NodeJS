const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getByID = id => tasksRepo.getByID(id);
// const getByID = (boardId, taskId) => {
//     const res = DB.tasks.filter((task) => task.boardId === boardId && task.id === taskId)[0];
//     return res;
// };

const create = (boardId, body) => tasksRepo.create(boardId, body);

const update = (id, body) => tasksRepo.update(id, body);

const remove = id => tasksRepo.remove(id);

module.exports = {getAll, getByID, create, update, remove};
