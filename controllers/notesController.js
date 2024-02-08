 const notesRouterApp = require('express').Router();
//create model
const Note = require('../models/notesModel')
 
// app.get('/',(req,res,next)=>{
//   res.send("<h1>Mongo Configration and api </h1>");
// })
// getting full data from backend

notesRouterApp.get('/', (req, res) => {
    Note.find({}, {}).then((notes) => {
      res.status(200).json(notes);
    });
  }); 
  
  
  
  // const Note = require('./models/notes')
  
  //get data from backend
  // app.use('/api/notes',featchAllNotes);
//store data in backend
//app.use(express.json());to post  json data
notesRouterApp.post('/', (req, res) => {
    // console.log(req.body);
    //preparing object to store in collection
    const note = new Note(req.body);
    // console.log(note);
    note.save()
        .then(() => {
      res.status(201).json({ message: "post request completed" });
    });
  });
  
  // getting data of particular id for update api/notes/:id
  
  notesRouterApp.get("/:id", (req, res) => {
    const id = req.params.id;
    Note.findById(id).then((note) => {
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: "id not found" });
      }
    });
  });
  
  // delete data of particular id api/notes/:id
  
  notesRouterApp.delete("/:id", (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id).then((deletedNote) => {
      if (deletedNote) {
        res.status(200).json({ message: "Deleted sucessfully" });
      } else {
        res.status(404).json({ message: "id not found" });
      }
    });
  });
  // put data of particular id update api/notes/:id
  
  notesRouterApp.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedNote = req.body;
    Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
      if (updatedNote) {
        res.status(200).json({ message: "updated" });
      } else {
        res.status(404).json({ message: "id not found" });
      }
    });
  });
  
   // patching data of particular id update api/notes/:id
  
   notesRouterApp.patch("/:id", (req, res) => {
    const id = req.params.id;
    const updatedNote = req.body;
    Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
      if (updatedNote) {
        res.status(200).json({ message: "updated" });
      } else {
        res.status(404).json({ message: "id not found" });
      }   
    });
  });


  module.exports=notesRouterApp;