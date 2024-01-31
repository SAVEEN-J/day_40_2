
const mongose = require('mongoose');

// const url =`mongodb+srv://saveen:saveen@cluster0.sjce8ng.mongodb.net/?retryWrites=true&w=majority`
//with database name
const url =`mongodb+srv://saveen:saveen@cluster0.sjce8ng.mongodb.net/DAY_40First?retryWrites=true&w=majority`
// console.log(url);
// console.log(process.argv);
//const url =`mongodb+srv://saveen:saveen@cluster0.sjce8ng.mongodb.net/?retryWrites=true&w=majority`   before ? we create data base name


mongose.connect(url)
.then(()=>{
    console.log("Connected to Mongo DB");
    // mongose.connection.close(); it is close the connection when the mongo db is connected
})
.catch((err)=>{
    console.error(err);
});

//save a note in the db

//define schema   documantion structure is called schema

const noteSchema =new mongose.Schema({
    content:String,
    important:Boolean

});

//create a model
const Note =mongose.model('Note',noteSchema,'Day41')//collection name :  collection name is called (Note) to notes ...2 arrgument is shema  3. collections name is 3 arguments its is automaticalls convert to (Note) to notes


//actual data to store in the database
const note = new Note ({
    content:"node have own server",
    important:true

});


let notes =[
    {
        content:"node",
        important:false

    },
     {
        content:"node -js",
        important:false

    },
];

notes.forEach(note =>{
    let notModel =new Note(note);
    notModel.save()
    .then(()=>{
        console.log('note saved');
    })

})
//save a note in the db
//its is stor the note data
// note.save()  
//  .then((result)=>{
//     console.log('note saved');
//     mongose.connection.close();
//  })
