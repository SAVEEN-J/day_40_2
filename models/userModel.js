const mongose = require('mongoose')


const userSchema = new mongose.Schema({

    username:String,
    name:String,
    passwordHash:String,
    notes:[
        {
            type:mongose.Schema.Types.ObjectId,
            ref:'Note'
        }
    ]

})
//delete only see the data
userSchema.set('toJSON', {
    transform:(document,returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
        delete returnObject.passwordHash


    }
})
const User = mongose.model('User',userSchema,'users')
// module.exports=mongose.model('day',userSchema,'userdata')
// module.exports =mongose.model('Note',noteSchema,'notes')
module.exports = User;