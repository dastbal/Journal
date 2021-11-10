const { ReturnDocument } = require('mongoose/node_modules/mongodb');
const UserService = require('../services/user.service');

const service  = new UserService()

exports.getLogin  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Login',
        errorMessage : null ,
        oldInput:null,
    })
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
        // to verify if exist the email
        await service.findOne(req.body.email)
        // to create the new user
        await service.create(req.body)
        res.redirect('/')
    } catch (error) {
        return next(error)
    }
}