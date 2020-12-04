import express from 'express';
import morgan from 'morgan';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import connectDatabase from './config/db.js';
import user from './routes/user.js';
import category from './routes/category.js';
import article from './routes/article.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/articles`, article);

connectDatabase();

app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  )
);
