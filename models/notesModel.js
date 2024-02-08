const mongose = require('mongoose');

const noteSchema =new mongose.Schema({
    content:String,
    important:Boolean,
    user:{
        type: mongose.Schema.Types.ObjectId,
        ref: 'User'
    }

});


module.exports =mongose.model('Note',noteSchema,'notes')