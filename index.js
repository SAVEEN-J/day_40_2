require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
//route export from routes
// const featchAllNotes=require('./routes/featchAllNotes')
 const mongose = require('mongoose');



app.use(cors());
app.use(express.json());
//////////////////////////////data base Start //////////////////////

 const URL=process.env.ATLAS_URI; 
//  const $PORT=process.env.LOCAL_HOST;

// const url =`connection url`
 mongose.connect(URL)
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
const Note =mongose.model('Note',noteSchema,'notes')
console.log("Note",Note);
//////////////////////////////data base end//////////////////////

// app.get('/',(req,res,next)=>{
//   res.send("<h1>Mongo Configration and api </h1>");
// })
// getting full data from backend

app.get('/api/notes', (req, res) => {
  Note.find({}, {}).then((notes) => {
    res.status(200).json(notes);
  });
}); 



// const Note = require('./models/notes')

//get data from backend
// app.use('/api/notes',featchAllNotes);






//store data in backend
//app.use(express.json());to post  json data
app.post('/api/notes', (req, res) => {
  // console.log(req.body);
  //preparing object to store in collection
  const note = new Note(req.body);
  // console.log(note);
  note.save()
      .then(() => {
    res.status(201).json({ message: "post request completed" });
  });
});

// getting data of particular id for update

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id).then((note) => {
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// delete data of particular id

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id).then((deletedNote) => {
    if (deletedNote) {
      res.status(200).json({ message: "Deleted sucessfully" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});
// put data of particular id update

app.put("/api/notes/:id", (req, res) => {
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

 // patching data of particular id update

app.patch("/api/notes/:id", (req, res) => {
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
//  app.listen($PORT ,()=>{
//     console.log(`server running on port ${$PORT}`);
//     });

const PORT =3005;
app.listen(PORT ,()=>{
console.log(`server running on port ${PORT}`);
});