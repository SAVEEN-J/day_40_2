
require("dotenv").config();
 const mongose = require('mongoose');
const config= require('./utils/config');
const express = require("express");
const app = express();
const cors = require("cors");
//route export from routes
 const logger =require('./utils/logger'); //we use like this logger.info,logger.error
//  const {info,error} =require('./utils/logger'); //we use like this info and error


//middleware
app.use(cors());
app.use(express.json());

 mongose.connect(config.MONGODB_URI)
.then(()=>{
    logger.info("Connected to Mongo DB");
  })
.catch((err)=>{
    logger.error(err);
});



const noteSchema =new mongose.Schema({
    content:String,
    important:Boolean

});
const Note =mongose.model('Note',noteSchema,'notes')









app.listen(config.PORT ,()=>{
logger.info(`server running on port ${config.PORT}`);
});