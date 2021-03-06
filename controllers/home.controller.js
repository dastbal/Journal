const RegisterService = require('../services/register.service');
const UserService = require('../services/user.service');
const userService  = new UserService()


const registerService = new RegisterService()
exports.getHome  =  async (req,res,next)=>{
    let user = await userService.findById(req.session.user._id)

    const sheets = await registerService.find(user);
    const count = await registerService.countSheets(req.session.user);
    req.session.sheets = sheets;


    res.render('home/home',{
        path: '/',
        pageTitle: 'Home',
        sheets: req.session.sheets,
        count: count,
    })
}
exports.getSpiritual  = (req,res,next)=>{
    
    res.render('home/topic',{
        path: '/',
        pageTitle: 'Spiritual',
        sheets: req.session.sheets,
    })
}
exports.getNormal  = (req,res,next)=>{
    res.render('home/topic',{
        path: '/',
        pageTitle: 'Normal',
        sheets: req.session.sheets,
    })
}
exports.getJoy  = (req,res,next)=>{
    res.render('home/topic',{
        path: '/',
        pageTitle: 'Joy',
        sheets: req.session.sheets,
    })
}
exports.getLearned  = (req,res,next)=>{
    res.render('home/topic',{
        path: '/',
        pageTitle: 'Learned',
        sheets: req.session.sheets,
    })
}
exports.getSad  = (req,res,next)=>{
    res.render('home/topic',{
        path: '/',
        pageTitle: 'Sad',
        sheets: req.session.sheets,
    })
}