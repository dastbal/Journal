const boom = require('@hapi/boom')
function validatorHandler(schema , property , view) {
    return (req,res,next)=>{
        const data = req[property]
        const {error} =schema.validate(data ,{abortEarly : false})
        if(error){
            let e;
            if(view == 'signup'){

                e = new boom.badRequest(error);
            }
            if(view == 'login'){

                e = new boom.badData(error);
            }
            //console.log(e)
            //res.locals.e = e;
            next(e)
        }
        next()
    }
    
  }

  module.exports= validatorHandler;