const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const Love = require('./models/love.model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('test');
});

app.post('/love', async (req, res) => {
  try {
    const love = await Love.create(req.body);
    console.log(love.message);

    res.status(200).json(love);

  } catch (error) {
    res.status(400).send(error);
  }
}
);

mongoose.connect(process.env.STRING_CONNECTION)
.then(() => {
  console.log('Connected to MongoDB');
})  
.catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});
