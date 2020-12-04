import express from 'express';
import { categoryController } from '../controllers/index.js';

const router = express.Router();

router.get('/', categoryController.list);
router.post('/', categoryController.create);

export default router;
