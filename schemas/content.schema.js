const Joi = require('joi');


const spiritual  = Joi.string("")
const happy  = Joi.string("")
const normal  = Joi.string("")


const createContentSchema = Joi.object({
    spiritual: spiritual.required(),
    happy:happy.required(),
    normal:normal.required(),
    
})

const updateContentSchema = Joi.object({
    spiritual: spiritual,
    happy:happy,
    normal:normal,
    
})


module.exports = { createContentSchema ,updateContentSchema}