const {Router} = require ('express')

const adminRouter = Router();


adminRouter.post("/signup",function (req, res ){
    res.json({
        messagge:"signup enpoint "
    })
})

adminRouter.post("/signin",function(req,res,middleware){
    res.json({
        message:"signin endpoint "
    })
})

adminRouter.post('/course' , function(req,res){
    res.json({
        message : "coruse created by admin "
    })
})


adminRouter.put ('/course' , function(req,res){
    res.json({
        message : " added coruse created by admin "
    })
})


adminRouter.delete('/course' , function(req,res){
    res.json({
        message : "coruse deleted by admin "
    })
})


adminRouter.get('/course/bulk' , function(req,res){
    res.json({
        message : " view all course coruse created by admin "
    })
})


module.exports ={
    adminRouter :adminRouter
}