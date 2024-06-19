const express = require('express');
const connectDB = require("./index")

const app = express();

const userRoutes = require('../controllers/userControllers');

//Router Middlewares
app.use(express.json());

app.use('/api', userRoutes);
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).json({message:"Internal server error"});
});

module.exports = app;

