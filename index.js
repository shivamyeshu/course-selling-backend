const express = require('express')
const mongoose = require('mongoose')
const {userRouter} = require('./routes/user')
const {courseRouter} = require('./routes/course')
const {adminRouter} = require('./routes/admin')
require('dotenv').config();

const PORT = process.env.PORT || 4000 ;
const app = express()

app.get('/', function (req,res){
    res.status(200).send("hello ")
})

app.use('/user' , userRouter)
app.use('/course', courseRouter)
app.use('/admin', adminRouter )

//defining all the schema for {admin , course , purchase , user }

async function main(){
    await mongoose.connect(process.env.DB_CONNECTIVITY)
    app.listen(PORT)
    console.log(`app is listning on the port ${PORT}`)  
}

main()
