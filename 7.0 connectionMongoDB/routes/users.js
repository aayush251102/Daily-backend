const express = require('express');
const router = express.Router();

const User = require('../models/userModels');

//routes

//CRUD Operation

//View/Read
router.get('/users', async(req,res) => {
    try {
        const users = await User.find(); // to get all the user
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message: error.message
        })        
    }
})

//Create

router.post('/users', async(req,res) => {
    try {
       const {name,age,weight} = req.body;
       const newUser = new User({name,age,weight});
       await newUser.save(); // save new entry into DB
       res.status(200).json({
        sucess:true,
        user:newUser,
       })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message: error.message
        }) 
    }
})

// Update data

router.put('/users/:id', async(req,res) => {
    const {id} = req.params;
    const {name,age,weight} = req.body;
    try {
        const  updatedUser = await User.findByIdAndUpdate(id, {name,age,weight});
        if(!updatedUser)
        {
            res.json({
                message : "User not found"
            })
        }
        res.json({name,age,weight});
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message: error.message
        })
    }
})

// delete data

router.delete('/users/:id', async(req,res) => {
    const {id} = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.send("deleted user.");
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message: error.message
        })
    }
})


module.exports = router;