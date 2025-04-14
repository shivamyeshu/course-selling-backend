const {Router} = require('express');

const courseRouter = Router()

courseRouter.post("/purchase", function(req,res){
    // u will expect the money that user pay 
    res.json({
        message :"your all courses "
    })
})


courseRouter.get("/preview", function(req,res){
    res.json({
        message :"your all courses "
    })
})

module.exports = {
    courseRouter : courseRouter
}