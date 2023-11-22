const express = require('express');
const app = express(); // app is a backend application

app.get("/", (req,res)=> {
    res.send("Welcome to my Sean's backend application");
});

app.get("/mckenna",(req,res)=>{
    res.send("Hello McKenna!");
});

app.listen(3000,()=>{
    console.log("Listening");
});