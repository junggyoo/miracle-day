import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config.js';
import { authRouter } from './src/router/index.js';
import { sequelize } from './src/db/database.js';

const app = express();

const corsOption = {
  origin: config.cors.allowOrigin,
  optionSuccessStatus: 200,
  credential: true,
};

app.use(cookieParser());
app.use(json());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/auth', authRouter);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  console.log(`Server is started... ${new Date()}`);
  app.listen(config.port);
});
