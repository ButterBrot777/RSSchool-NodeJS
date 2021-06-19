import express from 'express';
import * as tasksService from './task.service';
import { catchErrors } from '../../common/errors/errorHandler';

export const router = express.Router();

router.route('/:boardId/tasks').get(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAll(boardId!);
    res.status(200).json(tasks);
  })
);

router.route('/:boardId/tasks').post(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { boardId } = req.params;
    const task = await tasksService.create(boardId!, req.body);
    res.status(201).json(task);
  })
);

router.route('/:boardId/tasks/:id').get(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const task = await tasksService.getByID(id!);
    res.status(200).json(task);
  })
);

router.route('/:boardId/tasks/:id').put(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const task = await tasksService.update(id!, req.body);
    res.status(200).json(task);
  })
);

router.route('/:boardId/tasks/:id').delete(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await tasksService.remove(id!);
    res.status(204).send('Task removed!');
  })
);
