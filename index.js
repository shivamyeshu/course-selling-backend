const express = require('express')
const mongoose = require('mongoose')
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course')

const PORT = 5000;
const app = express()


app.get('/', function (req,res){
    res.send("hello ")
})
app.use('/user' , userRouter)
app.use('/course', courseRouter)


app.listen(PORT, ()=>{
    console.log(`app is listning on the port ${PORT}`)  
})