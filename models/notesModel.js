const mongose = require('mongoose');

const noteSchema =new mongose.Schema({
    content:String,
    important:Boolean

});


module.exports =mongose.model('Note',noteSchema,'notes')