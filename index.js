

const mongose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// const PORT=process.env.ATLAS_URI;

const url =`mongodb+srv://saveen:saveen@cluster0.sjce8ng.mongodb.net/DAY_40First?retryWrites=true&w=majority`
mongose.connect(url)
.then(()=>{
    console.log("Connected to Mongo DB");
    // mongose.connection.close(); it is close the connection when the mongo db is connected
})
.catch((err)=>{
    console.error(err);
});



const noteSchema =new mongose.Schema({
    content:String,
    important:Boolean

});

//create a model
const Note =mongose.model('Note',noteSchema,'Day41')

app.get('/',(req,res,next)=>{
  res.send("<h1>Mongo Configration and api </h1>");
})
// getting full data from backend
app.get("/api/notes", (req, res) => {
  Note.find({}, {}).then((notes) => {
    res.status(200).json(notes);
  });
});

app.post("/api/notes", (req, res) => {
  //preparing object to store in collection
  const note = new Note(req.body);
  note.save().then(() => {
    res.status(201).json({ message: "post request completed" });
  });
});







app.listen(8080, () => {
    console.log("server running in port 8080");
  });