const boom = require('@hapi/boom')

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
exports.postSignup  = (req,res,next)=>{
    console.log(' inside postsignup controller')
    console.log(req.body)
    const { userName , email , password , confirmPassword , genre } = req.body
    if(res.locals.e ){
        const details = res.locals.e.details
        console.log(details)

        return  res.render('auth/signup',{
            path: '/login',
            pageTitle: " Sign Up",
            errorMessage : details ,
        })
        
    }
    console.log('iam here')
    res.redirect('/')
}