import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/routes';
const PORT = 4000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/taylorMongo', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'welcome to taylorApp-Mongodb' }))

app.use('/api/v1', routes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});