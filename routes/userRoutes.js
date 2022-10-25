const express = require('express');
const router = express.Router();
const user = require('../models/userModel');

router.post('/register',(req,res) =>{
    const{name,email,password} = req.body;
    const newUser = new user({name , email, password});
    try {
        newUser.save();
        res.status(200).json({
            success:true,
            message:'Registered Successfully !!',
        });
    } catch (error) {
        res.status(400).json({
            message:error,
        });
    }
});

router.post("/login", async(req,res)=>{
    const{email, password}= req.body;
    try {
       const user = await user.find({email,password});
       if(user.length>0){
        const currentUser ={
            name:user[0].name,
            email:user[0].email,
            isAdmin:user[0].isAdmin,
            _id:user[0].Id,
        }
        res.status(200).send(currentUser);
       } else{
        res.status(400).json({
            message:'Login Failed'
        });
       }
    } catch (error) {
        res.status(404).json({
            message:'Something went wrong',
        });
    }

});


router.get('/getAllUsers',async (req,res)=>{
    try {
        const users = await user.find({});
    res.status(200).send(users)
    } catch (error) {
       res.status(404).json({message:error.stack}); 
    }
});

router.post('/deleteUser', async(req,res)=>{
   const userId = req.body.userId;
   try {
    await user.findOneAndDelete({_id:userId})
     res.status(200).send('User Deleted')
} catch (error) {
    res.status(404).json({message:error.stack});
    
   }
});
module.exports = router;