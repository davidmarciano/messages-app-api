import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from '../dbConfig';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

const db = mongoose.connect(dbConfig.url, dbConfig.params, () => console.log(dbConfig.callBackMessage));
const userRouter = userRoutes();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Messages-Service');
});

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Server is running on PORT http://localhost:${port}`));