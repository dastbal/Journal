const Joi = require('joi');


const title  = Joi.string("")
const spiritExp  = Joi.string("")
const happyExp  = Joi.string("")
const yourDay  = Joi.string("")
const date = Joi.date()
const sadExp = Joi.string("")
const place = Joi.string("")
const toShare = Joi.string("")
const lessonLearned = Joi.string("")


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
    
})


module.exports = { createRegisterSchema ,updateRegisterSchema}