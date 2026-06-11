import express from 'express';
import router from './routes/user.js';

const app=express();

const PORT=7000;

app.get('/',(req,res)=>{
    res.send('Hey there! Welcome to the backend server.');
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});