exports.getHome  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Home',
    })
}