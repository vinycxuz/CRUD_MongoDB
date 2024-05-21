const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('test');
});

mongoose.connect(`mongodb+srv://crudmongo:${process.env.PASSWORDMONGO}@crudmongo.4v8cpdw.mongodb.net/?retryWrites=true&w=majority&appName=crudmongo`)
.then(() => {
  console.log('Connected to MongoDB');
})  
.catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});
