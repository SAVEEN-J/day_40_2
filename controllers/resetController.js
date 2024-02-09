const resetRouterApp = require('express').Router();

const User = require('../models/userModel');
const bcrypt = require('../utils/config');
const config = require('../utils/config');
const nodemailer = require('nodemailer');
const logger = require('../utils/logger')



resetRouterApp.post('/', async (request,response)=>{
    //get the email from the request body
    const {email}= request.body;
    //find the user with the email
    const user = await User.findOne({email});
    logger.info(user);
    //if the user is not fount, return an error
    if(!user){
        return responce.status(404).json({error:'user not found'});

    }
    //if the user is found, generate a random string
    const randomString = Math.random().toString(36).substring(2 ,15) + 
                         Math.random().toString(36).substring(2 ,15);
    //prepare a link with the random string
    const link = `https://localhost:3005/reset/?randomString=${randomString}`;

    //save the randome string string to user object
    user.resetToken = randomString;
    await user.save();

    
    //save an email to the user with the link
    const transporter =nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:config.Email_ID,
            pass:config.Email_PW,
        }
    })

    const sendMail = async () => {
        const info = await transporter.sendMail({
          from: `"SAVEEN_J" <${config.Email_ID}>`, // sender add
          to: user.email, //list of reciver
          subject: "Reset Password",
          text: link, //plain text body
        });
        logger.info('meaaage sent: %s', info.messageID);
      }
      sendMail().catch(logger.error);
});

module.exports = resetRouterApp;