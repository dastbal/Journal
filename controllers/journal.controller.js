const boom = require('@hapi/boom')

//     service user
//  


exports.getFeed  = (req,res,next)=>{
    res.render('journal/feed',{
        path: '/Feed',
        pageTitle: 'Feed',
      
    })
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