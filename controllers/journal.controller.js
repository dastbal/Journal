const boom = require('@hapi/boom')

const RegisterService = require('../services/register.service');
const UserService = require('../services/user.service');

const userService  = new UserService()
const registerService = new RegisterService()

exports.getFeed  = async (req,res,next)=>{

    try{

        const users =  await userService.find()
        res.render('journal/feed',{
            path: '/Feed',
            pageTitle: 'Feed',
            users: users
            
        })
    }catch{

    }
   
}
exports.getUserName  = async (req,res,next)=>{

    try{
        const { id } = req.params

        const sheets =  await registerService.find(id)
        res.render('journal/feed-user',{
            path: '/Feed',
            pageTitle: 'Feed',
            sheets: sheets
            
        })
    }catch{

    }
   
}


exports.getProfile  = async (req,res,next)=>{

    const user = await userService.findById(req.session.user._id)  ;
    res.render('journal/profile',{
        path:'/profile',
        pageTitle:'Profile',
        user: user , // enviando
    })
    //  enviarlo  al render 
    // view   reciva the   user.   y lo renderizar .
}