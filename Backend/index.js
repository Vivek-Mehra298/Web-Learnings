import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './routes/user.js';


const app=express();

const PORT=7000;

app.get('/',(req,res)=>{
    res.send('Hey there! Welcome to the backend server.');
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Re-develop').then(()=>{
    console.log('MongoDB connected successfully');
}).catch((error)=>{
    console.error('MongoDB connection error:',error);
})

// Cros Origin Resource Sharing - It's a security feature implemented by browsers to restrict web pages from making requests to a different domain than the one that served the web page. It allows servers to specify who can access their resources and how they can be accessed.
app.use(cors());

//Routes
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});