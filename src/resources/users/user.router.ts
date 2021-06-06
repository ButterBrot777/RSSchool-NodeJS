import express from 'express';
import {User} from './user.model';
import * as usersService from './user.service';
import { catchErrors } from '../../common/errors/errorHandler';

export const router = express.Router();

router.route('/').get(
  // wrap function into errorHandler callback
  catchErrors(async (_req:express.Request, res:express.Response) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
);

router.route('/').post(
  catchErrors( async (req: express.Request, res: express.Response) => {
    const user = await usersService.create(new User(req.body));
    res.status(201).json(User.toResponse(user));
  })
);

router.route('/:id').get(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await usersService.getByID(id!);
    res.status(200).json(User.toResponse(user));
  })
);

router.route('/:id').put(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await usersService.update(id!, req.body);
    res.json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  catchErrors(async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await usersService.remove(id!);
    res.sendStatus(204);
  })
);
