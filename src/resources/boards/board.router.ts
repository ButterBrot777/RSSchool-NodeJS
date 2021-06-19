import express from 'express';
import {Board} from './board.model';
import * as boardsService from './board.service';

import { catchErrors } from '../../common/errors/errorHandler';

export const router = express.Router();

router.route('/').get(
  catchErrors( async (_req: express.Request, res: express.Response) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
);

router.route('/').post(
  catchErrors( async (req: express.Request, res: express.Response) => {

    const board = await boardsService.create(new Board(req.body));
    res.status(201).json(board);
  })
);

router.route('/:id').get(
  catchErrors( async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const board = await boardsService.getByID(id!);
    res.status(200).json(board);
  })
);

router.route('/:id').put(
  catchErrors( async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const board = await boardsService.update(id!, req.body);
    res.json(board);
  })
);

router.route('/:id').delete(
  catchErrors( async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const board = await boardsService.remove(id!);
    res.status(204).json(board);
  })
);
