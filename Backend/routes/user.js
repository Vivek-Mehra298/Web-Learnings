import {Router} from 'express'

import User from "../models/user.js";

const router=Router();

router.get('/user',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message:"Unknown error occured while fetching users"});
    }
})

router.post('/user',async(req,res)=>{
    try{
        const{FullName,Email,Password}=req.body;
        await User.create({FullName,Email,Password});
        res.status(201).json({message:"User created successfully"});
    }
    catch(error){
        res.status(500).json({message:"Unknown error occured while creating user"});
    }
})

router.get('/user/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:"Unkowon error occurend while fetching the user"});
    }
})

router.delete('/user/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
    }
    catch(error){
        res.status(500).json({message:"Unknown error occured while deleting the user"});
    }
})

export default router;