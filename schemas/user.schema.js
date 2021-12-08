const Joi = require('joi');

const userName  = Joi.string().min(4).max(25)
const email  = Joi.string().email()
const password  = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
const confirmPassword  = Joi.ref('password')
const genre  = Joi.string()
const aboutMe = Joi.string()
const imageUrl = Joi.string()
const _csrf = Joi.allow().required()
const createUserSchema = Joi.object({
    userName: userName.required(),
    email: email.required(),
    password: password.required(),
    confirmPassword: confirmPassword,
    genre: genre.required(),
    aboutMe: aboutMe,
    imageUrl:imageUrl,
    _csrf: _csrf
    
})
const updateUserSchema = Joi.object({
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    genre: genre,
    aboutMe: aboutMe,
    imageUrl: imageUrl,
    _csrf: _csrf


})
const loginUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    _csrf: _csrf

})

module.exports = { loginUserSchema, updateUserSchema,  createUserSchema}