import express from 'express';
import { imageController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

router.post(
  '/upload',
  [isAuthenticated, isAuthorized('admin'), upload],
  imageController.create
);
router.get('/images/:id', imageController.get);

export default router;
