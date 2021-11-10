const UserService = require('../services/user.service');

const service  = new UserService()

exports.getLogin  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Login',
    })
}
exports.getSignup  = (req,res,next)=>{
    res.render('auth/signup',{
        path: '/signup',
        pageTitle: 'Sign Up',
        errorMessage : null ,
    })
}
exports.postSignup  = async (req,res,next)=>{
    console.log(' inside postsignup controller')
    console.log(req.body)
    if(res.locals.e ){
        const details = res.locals.e.details

        return  res.render('auth/signup',{
            path: '/login',
            pageTitle: " Sign Up",
            errorMessage : details ,
        })
        
    }
    await service.findOne(req.body.email)
    await service.create(req.body)
    res.redirect('/')
}