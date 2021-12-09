const Joi = require('joi');


const title  = Joi.string("")
const spiritExp  = Joi.string("")
const happyExp  = Joi.string("")
const yourDay  = Joi.string("")
const date = Joi.string("")
const sadExp = Joi.string("")
const place = Joi.string("")
const toShare = Joi.string("")
const lessonLearned = Joi.string("")
const _csrf = Joi.allow().required()



const createRegisterSchema = Joi.object({
    title: title,
    spiritExp: spiritExp,
    happyExp: happyExp,
    yourDay: yourDay,
    date: date,
    sadExp:sadExp,
    place: place.required(),
    toShare: toShare,
    lessonLearned: lessonLearned,
    _csrf: _csrf

    
})

const updateRegisterSchema = Joi.object({
    title: title,
    spiritExp: spiritExp,
    happyExp: happyExp,
    yourDay: yourDay,
    date: date,
    sadExp:sadExp,
    place: place,
    toShare: toShare,
    lessonLearned: lessonLearned,
    _csrf: _csrf

    
})


module.exports = { createRegisterSchema ,updateRegisterSchema}