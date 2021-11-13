exports.getRegister = (req,res,next)=>{
    console.log('i am in register')
    res.render('register/dashboard',{
        path: '/',
        pageTitle: 'Register',
    })
}