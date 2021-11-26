const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const snackRoute=require('./routes/snacks');
app.use('/snacks',snackRoute);

const uploadRoute=require('./routes/servers');
app.use('/images',uploadRoute);
//Routes

//listening
mongoose.connect("mongodb://localhost:27017/snacks",() =>{
  console.log ("Database connected");
});

app.listen(8000);