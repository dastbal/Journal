function logErrors (err, req, res, next) {
    console.error(err);
    next(err);
  }
  
  function errorHandler(err, req, res, next) {

  res.status(500).render('500',{
    path: '/Page Not Found',
    pageTitle: 'Page Not Found',
})
  }
  function boomErrorHandler(err, req, res, next) {
    if(err.isBoom){
      const { output } = err ;
      const message = output.payload.message
    
      res.status(output.statusCode).render('500',{
        path: '/Page Not Found',
        pageTitle: 'Error',
        errorMessage : message,
    });
    }else{

      next(err)
    }
  }
  
  module.exports = { errorHandler , boomErrorHandler , logErrors}