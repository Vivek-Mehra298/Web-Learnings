import express from 'express';

const app=express();

const PORT=7000;

app.get('/',(req,res)=>{
    res.send('Hey there! Welcome to the backend server.');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});