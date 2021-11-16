exports.getHome  = (req,res,next)=>{
    res.render('home/home',{
        path: '/',
        pageTitle: 'Home',
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