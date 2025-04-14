const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Types = mongoose.Types


console.log("db connnected offically ");


const userSchema = new Schema({
    email: {type: String,unique:true},
    password: String,
    firstname : String,
    lastname : String,
})

const adminSchema = new Schema({
    email: {type: String,unique:true},
    password: String,
    firstname : String,
    lastname : String,
})

const courseSchema = new Schema({
    title : String ,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId :  Types.ObjectId
})

const purchaseSchema = new Schema({
    userId :  Types.ObjectId ,
    courseId :  Types.ObjectId,
})

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const purchaseModel = mongoose.model("purchse", purchaseSchema)
const courseModel = mongoose.model("course", courseSchema)

module.exports = {
    userModel,
    adminModel,
    purchaseModel,
    courseModel
}