const RegisterService = require('../services/register.service');

const registerService = new RegisterService()

exports.getRegister = (req,res,next)=>{
    console.log('i am in register')
    res.render('register/sheets',{
        path: '/',
        pageTitle: 'Register',
    })
}
exports.postCreateSheet = async (req,res,next)=>{
    console.log(req.body)
    
    try {
        
        // to create the new  sheet
        await registerService.create(req.body, req.session.user).then(()=>{

            console.log('saved')
        })
        res.redirect('/journal/home')
    } catch (error) {
        console.log('errores --->',error)

    }

}