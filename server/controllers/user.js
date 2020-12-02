import { userService } from '../services/index.js';

export const create = async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
};
