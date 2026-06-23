import { model,Schema } from "mongoose";

// Fileds present in the user model are FullName, Email, and Password. The FullName field is a required string that represents the user's full name. The Email field is also a required string that must be unique, ensuring that no two users can have the same email address. The Password field is a required string that stores the user's password. Additionally, the schema includes timestamps, which automatically adds createdAt and updatedAt fields to each user document, allowing for easy tracking of when users are created and modified.    
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


// Create a model named "User" based on the userSchema. This model will be used to interact with the "users" collection in the MongoDB database, allowing for operations such as creating, reading, updating, and deleting user documents.
const User=model("User",userSchema);

export default User;