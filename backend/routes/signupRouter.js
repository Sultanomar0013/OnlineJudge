const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const signupRouter = express.Router();

signupRouter.post('/signup', async (req, res)=>{
    try{
        const { userName, email, password, selectedRole } = req.body;
        console.log('Recived Data', req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userName, email, password: hashedPassword, selectedRole });
        await newUser.save();

        res.status(201).json({ message:'User created successfully'});
    } catch (error){
        console.error(error);
        console.log("Server error", error);
        res.status(500).json({ message: 'An error ossured', error:error.message});
    }
});

module.exports = signupRouter;
