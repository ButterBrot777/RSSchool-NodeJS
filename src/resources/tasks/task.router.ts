import express from 'express';
import * as tasksService from './task.service';

export const router = express.Router();

router.route('/:boardId/tasks').get(async (req, res) => {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.status(200).json(tasks);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = await tasksService.create(req.params.boardId, req.body);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  try {
    const user = await tasksService.getByID(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  try {
    const task = await tasksService.update(req.params.id, req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.remove(req.params.id);
    res.status(204).json(task);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
