const boom = require('@hapi/boom')
function validatorHandler(schema , property) {
    return (req,res,next)=>{
        const data = req[property]
        const {error} =schema.validate(data ,{abortEarly : false})
        if(error){
            const e = new boom.badRequest(error)
            console.log(e)
            res.locals.e = e;
            next()
        }
        next()
    }
    
  }

  module.exports= validatorHandler;