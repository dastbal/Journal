exports.getRegister = (req,res,next)=>{
    console.log('i am in register')
    res.render('register/sheets',{
        path: '/',
        pageTitle: 'Register',
    })
}