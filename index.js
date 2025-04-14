const express = require('express')
const mongoose = require('mongoose')


const PORT = 5000;
const app = express()

app.get('/',(req,res,middleware)=>{
    res.json({
        Message :"hello "
    })
})

app.post("/user/signup",function (req, res ){
    res.json({
        messagge:"signup enpoint "
    })
})

app.post("/user/signin",function(req,res,middleware){
    res.json({
        message:"signin endpoint "
    })
})

app.get("/user/purchase", function(req,res,middleware){
    res.json({
        message :"your all purchased  courses "
    })
})

app.post("/course/purchase", function(req,res,middleware){
    // u will expect the money that user pay 
    res.json({
        message :"your all courses "
    })
})


app.get("/course", function(req,res,middleware){
    res.json({
        message :"your all courses "
    })
})

app.listen(PORT, ()=>{
    console.log(`app is listning on the port ${PORT}`)  
})