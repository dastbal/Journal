const RegisterService = require('../services/register.service');

const registerService = new RegisterService()

exports.getRegister = (req,res,next)=>{
    res.render('register/sheets',{
        path: '/',
        pageTitle: 'Register',
        oldSheet:null,
    })
}
exports.getEditRegister = async (req,res,next)=>{
    const sheetId   = req.params.sheetId
    const sheet = await registerService.findById(sheetId)
    console.log(sheet)
    res.render('register/sheets',{
        path: '/',
        pageTitle: 'Register',
        oldSheet:sheet,

    })
}
exports.postCreateSheet = async (req,res,next)=>{
    
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