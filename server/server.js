import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import connectDatabase from './config/db.js';
import user from './routes/user.js';
import category from './routes/category.js';
import article from './routes/article.js';
import image from './routes/image.js';
import auth from './routes/auth.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/`, image);
app.use(`${process.env.BASEURL}/`, auth);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  )
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
