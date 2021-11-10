const UserService = require('../services/user.service');
const boom = require('@hapi/boom')


const service  = new UserService()

exports.getLogin  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Login',
        errorMessage : null ,
        oldInput:null,
    })
}
exports.postLogin  = async (req,res,next)=>{
try{
    try{
        const user = await service.findOne(req.body.email )
            if(!user){throw new Error()  }
    }catch(e){throw new Error("Invalid Email")}
        
}catch(error){
    
    return next(new boom.badData(error))
    
}
}
exports.getSignup  = (req,res,next)=>{
    res.render('auth/signup',{
        path: '/signup',
        pageTitle: 'Sign Up',
        errorMessage : null ,
        oldInput:null,
    })
}
exports.postSignup  = async (req,res,next)=>{
    
    try {
        try{
            // to verify if exist the email
            const user = await service.findOne(req.body.email )
            if(user){
                throw new Error()  
            }
        }catch(e){
            throw new Error("E-mail exists already, please pick a different one")  
            
        }
        // to create the new user
        await service.create(req.body)
        res.redirect('/')
    } catch (error) {
        return next(new boom.badRequest(error))
    }
}