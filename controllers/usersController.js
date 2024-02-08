const usersRouterApp = require('express').Router();
const { model } = require('mongoose');
const User = require('../models/userModel')
const bcrypt = require('bcrypt')



usersRouterApp.post('/', async (request , responce)=>{
     const {username , name , password} = request.body;

     //convert the plaintext password to hashed password
    const saltRounds= 10;
     const passwordHash = await bcrypt.hash(password , saltRounds);
//prepare the user object to store in the database
const user = new User({
    username,
    name,
    passwordHash
});
//stor it in the dastabase
 const savedUser =await user.save();
 responce.status(201).json(savedUser);

})
module.exports=usersRouterApp;