const DB = require('../../common/DB');

const getAll = async (boardId) => DB.getAllTasks(boardId);

const getByID = async id => {
  const task = await DB.getTaskByID(id);
  if (!task) {
    throw new Error(`Task with id ${id} was not found`);
  }
  return task;
};

const create = async (boardId, body) => DB.createTask(boardId, body);

const update = async (id, body) => {
  const dbTask = await DB.updateTask(id, body);
  if (!dbTask) {
    throw new Error(`Task with id ${id} was not found`);
  }
  return dbTask;
};

const remove = async id => {
  const dbTask = await DB.removeTask(id);
  if (!dbTask) {
    throw new Error(`Task with id ${id} was not found`);
  }
  return dbTask;
};

module.exports = { getAll, getByID, create, update, remove };
