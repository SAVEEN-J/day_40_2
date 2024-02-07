
require("dotenv").config();
const mongose = require('mongoose');

const URL=process.env.ATLAS_URI; 
//  const $PORT=process.env.LOCAL_HOST;

// const url =`mongodb+srv://saveen:saveen@cluster0.sjce8ng.mongodb.net/DAY_40First?retryWrites=true&w=majority`
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
// const Note =mongose.model('Note',noteSchema,'notes')
// console.log("Note",Note);



module.exports =mongose.model('Note',noteSchema,'notes')