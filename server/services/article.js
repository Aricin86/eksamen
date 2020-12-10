import Article from '../models/article.js';

export const getArticleById = async (id) =>
  Article.findById(id)
    .populate('admin', 'name')
    .populate('category', 'category');

export const listArticles = async () =>
  Article.find().populate('admin', 'name').populate('category', 'category');

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

// Ingen cascading ned fra Article og dermed best å bruke findByIdAndDelete()
export const removeArticle = async (id) => Article.findByIdAndDelete(id);
