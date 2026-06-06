import { model,Schema } from "mongoose";

const userSchema=new Schema({
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const User=model("User",userSchema);

export default User;