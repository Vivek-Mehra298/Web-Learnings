import {Router} from 'express'

import User from "../models/user.js";

const router=Router();

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

export default router;