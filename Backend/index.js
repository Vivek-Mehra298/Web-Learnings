import express from 'express';
import mongoose from 'mongoose';

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

//Routes
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});