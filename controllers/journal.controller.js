const boom = require('@hapi/boom')

exports.getHome  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Home',
    })
}
exports.getFeed  = (req,res,next)=>{
    res.render('journal/feed',{
        path: '/Feed',
        pageTitle: 'Feed',
      
    })
}
exports.getProfile  = (req,res,next)=>{
    res.render('journal/profile',{
        path: '/login',
        pageTitle: 'Profile'
    })
}