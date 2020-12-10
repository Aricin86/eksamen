import express from 'express';
import { categoryController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

router.get('/', categoryController.list);
router.post(
  '/',
  [isAuthenticated, isAuthorized('admin')],
  categoryController.create
);

export default router;
