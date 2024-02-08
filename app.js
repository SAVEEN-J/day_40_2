
require("dotenv").config();
const mongose = require('mongoose');
const logger =require('./utils/logger');
const config= require('./utils/config');
const notesRouter = require('./controllers/notesController')
const middleware =require('./utils/middleware')

const express = require("express");
const app = express();
const cors = require("cors");

//this is mongose configration ,undefind value anything in mongose, when its read mongose not show the error
mongose.set('strictQuery', false);
// logger.info('connecting to' ,`http://localhost:${config.PORT}`);
mongose.connect(config.MONGODB_URI)
.then(()=>{
    logger.info("Connected to Mongo DB");
  })
.catch((err)=>{
    logger.error("Error connecting to MongoDB", logger.error.message);
});

//middleware
app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger);

//api
app.use('/api/notes',notesRouter);

app.use(middleware.unknownEndpoint);

module.exports=app;