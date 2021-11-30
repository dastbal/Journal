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


exports.getProfile  = (req,res,next)=>{

    const user = req.session.user;
    res.render('journal/profile',{
        path:'/profile',
        pageTitle:'Profile',
        user: user , // enviando
    })
    //  enviarlo  al render 
    // view   reciva the   user.   y lo renderizar .
}