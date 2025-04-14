const {Router} = require('express');
const userRouter = Router();

userRouter.post("/signup",function (req, res ){
    res.json({
        messagge:"signup enpoint "
    })
})

userRouter.post("/signin",function(req,res,middleware){
    res.json({
        message:"signin endpoint "
    })
})

userRouter.get("/purchase", function(req,res,middleware){
    res.json({
        message :"your all purchased  courses "
    })
})

module.exports = {
    userRouter : userRouter
}

