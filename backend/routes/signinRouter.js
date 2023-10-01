const express = require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signinRouter = express.Router();

signinRouter.post('/signin', async (req, res) =>{
    try{
        const { email, password } = req.body;
        console.log("Recived Data", req.body);
        const user = await User.findOne({ email });

        if ( !user || !bcrypt.compareSync( password, user.password)){
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const selectedRole = user.selectedRole;
        const token = jwt.sign({ userId: user._id, email, selectedRole} , process.env.JWT_SECRET_KEY,  {
            expiresIn: '1h',
        }) 

        res.status(200).json({ token });

    } catch (error) {
        console.error("error");
        console.log(error);
        res.status(500).json({ message: 'AN ERROR OCCURRED', error: error});
    }
});

module.exports = signinRouter;
