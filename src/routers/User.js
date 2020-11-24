const express = require("express");
const router = express.Router();
const User = require('../model/User');



//Get Request:-     
router.get('/', async(req, res) =>{
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error });
    }}
    )
    
     router.get('/:id', async(req, res) => {
        try {
        const _id = req.params.id
        const user = await User.findById(_id)
        res.json(user)
        } catch (error) {
           return res.status(404).json({ message: error.message });
        }
      
    })
    
     router.get('/n/:name', async(req, res) => {
       try {
           const user = await User.find({name:req.params.name})
           res.json(user)
       } catch (error) {
           return res.status(400).json({ message: error.message });
       }
    })
    
    //Post Request (Add new Data)
    
     router.post('/p', async(req, res) => {
        try {
            const user = new User(
                req.body
            ) 
            await user.save()
            res.send(user);
            console.log(user)
    
        } catch (error) {
           return res.status(500).json({ message: error.message }); 
        }
        
    });
    
    //Delete Request (Delete Data)
    
     router.delete('/p/:id', async(req, res) => {
        try {
            const user = await User.findByIdAndDelete({_id:req.params.id})
            res.json(user)
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });
    
    //Patch/Put Data (Update Data)
    
     router.patch('/p/:id', async(req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                {_id:req.params.id},
                req.body,{
                    new:true,
                    runValidators:true
                }
                )
            res.json(user)
            console.log(user)
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    });


module.exports = router;