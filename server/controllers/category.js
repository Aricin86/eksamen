import { categoryService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';

export const list = catchAsyncErrors(async (req, res, next) => {
  const categories = await categoryService.listCategories();
  res.status(200).json(categories);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
});
