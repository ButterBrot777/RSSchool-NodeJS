import express from 'express';
import {User} from './user.model';
import * as usersService from './user.service';

export const router = express.Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});
// router.route('/').get(
//   // wrap function into errorHandler callback
//   catchErrors(async (req, res) => {
//     const users = await usersService.getAll();
//     // map user fields to exclude secret fields like "password"
//     res.json(users.map(User.toResponse));
//   })
// );

router.route('/').post(async (req, res) => {
  const user = await usersService.create(new User(req.body));
  res.status(201).json(User.toResponse(user));
});
// router.route('/').post(
//   catchErrors(async (req, res) => {
//     const user = await usersService.create(new User(req.body));
//     res.status(200).json(User.toResponse(user));
//   })
// );

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getByID(req.params.id);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});
// router.route('/:id').get(
//   catchErrors(async (req, res) => {
//     const user = await usersService.getByID(req.params.id);
//     if (user) {
//       res.status(200).json(User.toResponse(user));
//     } else {
//       const error = new Error();
//       error.status = 404;
//       throw error;
//     }
//   })
// );

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.update(req.params.id, req.body);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});
// router.route('/:id').put(
//   catchErrors(async (req, res) => {
//     const user = await usersService.update(req.params.id, req.body);
//     if (user) {
//       await res.status(200).json(User.toResponse(user));
//     } else {
//       const error = new Error();
//       error.status = 401;
//       throw error;
//     }
//   })
// );

router.route('/:id').delete(async (req, res) => {
  try {
    const deleted = await usersService.remove(req.params.id);
    res.json(User.toResponse(deleted!));
  } catch (error) {
    res.status(404).send(error.message);
  }
});
// router.route('/:id').delete(
//   catchErrors(async (req, res) => {
//     if (await usersService.remove(req.params.id)) {
//       res.status(204).json();
//     } else {
//       const error = new Error();
//       error.status = 401;
//       throw error;
//     }
//   })
// );
