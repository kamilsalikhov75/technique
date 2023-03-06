import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { register, login } from './controllers/user-controller.js';
import {
  createTechnique,
  deleteTechnique,
  getTechnique,
  getTechniques,
  updateTechnique,
} from './controllers/technique-controller.js';

const port = process.env.PORT || 3001;
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.post('/auth/register', register);
app.post('/auth/login', login);

app.post('/technique', createTechnique);
app.get('/technique', getTechniques);
app.get('/technique/:id', getTechnique);
app.delete('/technique/:id', deleteTechnique);
app.patch('/technique/:id', updateTechnique);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
