function logErrors (err, req, res, next) {
    //console.error(err);
    next(err);
  }
  
  function errorHandler(err, req, res, next) {

  res.status(500).render('500',{
    path: '/Page Not Found',
    pageTitle: 'Page Not Found',
})
  }
  function boomErrorHandler(err, req, res, next) {
    if(err.isBoom && err.output.payload.error == 'Bad Request'){
      const { output } = err ;
      const message = output.payload.message
      console.log('kk',req.body)

    
      res.status(output.statusCode).render('auth/signup',{
        path: '/',
        pageTitle: " Sign Up",
        errorMessage : message,
        oldInput:{...req.body},
      });
    }else if(err.isBoom && err.output.payload.error == 'Bad Data'){
      const { output } = err ;
      const message = output.payload.message
      
      res.status(output.statusCode).render('auth/login',{
        path: '/',
        pageTitle: " Login",
        errorMessage : message,
        oldInput:{...req.body},
    });
      
    }else{

      next(err)
    }
  }
  
  module.exports = { errorHandler , boomErrorHandler , logErrors}