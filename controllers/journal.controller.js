const boom = require('@hapi/boom')

exports.getHome  = (req,res,next)=>{
    res.render('journal/home',{
        path: '/',
        pageTitle: 'Home',
    })
}
exports.getFeed  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Feed',
      
    })
}
exports.getProfile  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Profile'
    })
}