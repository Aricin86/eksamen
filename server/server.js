import express from 'express';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import connectDatabase from './config/db.js';
import user from './routes/user.js';

const app = express();

app.use(express.json());

app.use(`${process.env.BASEURL}/users`, user);

connectDatabase();

app.listen(
  PORT,
  console.log(
    `This server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  )
);
