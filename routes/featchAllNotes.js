const express =require('express');
 const router=express.Router();

 const Note = require('../models/notes')

// getting full data from backend
router.get('/', (req, res) => {
  Note.find({}, {}).then((notes) => {
    res.status(200).json(notes);
  });
});
module.export =router;