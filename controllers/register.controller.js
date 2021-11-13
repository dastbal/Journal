exports.getRegister = (req,res,next)=>{
    console.log('i am in register')
    res.render('register/home',{
        path: '/',
        pageTitle: 'Register',
    })
}