exports.getResgister = (req,res,next)=>{
    res.render('register/home',{
        path: '/',
        pageTitle: 'Register',
    })
}