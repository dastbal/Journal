const RegisterService = require('../services/register.service');

const registerService = new RegisterService()
exports.getHome  =  async (req,res,next)=>{
    const sheets = await registerService.find(req.session.user)

    res.render('home/home',{
        path: '/',
        pageTitle: 'Home',
        sheets: sheets
    })
}
exports.getSpiritual  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Spiritual',
    })
}
exports.getNormal  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Normal',
    })
}
exports.getJoy  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Joy',
    })
}
exports.getLearned  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Learned',
    })
}
exports.getSad  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Sad',
    })
}