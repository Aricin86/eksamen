import { categoryService } from '../services/index.js';

export const list = async (req, res, next) => {
  const categories = await categoryService.listCategories();
  res.status(200).json(categories);
};

export const create = async (req, res, next) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json(category);
};
