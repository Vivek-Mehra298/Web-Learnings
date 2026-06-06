import {Router} from 'express'

import User from "../models/user";

const router=Router();

router.post('/user',async(req,res)=>{
    const {FullName,Email,Password}=req.body;

    await User.create({FullName,Email,Password});
})

export default router;