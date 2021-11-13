const Joi = require('joi');

const userName  = Joi.string().min(4).max(15)
const email  = Joi.string().email()
const password  = Joi.string().min(6).max(30)
const confirmPassword  = Joi.string().min(6).max(30)
const genre  = Joi.string()
const aboutMe =Joi.string()
const createUserSchema = Joi.object({
    userName: userName.required(),
    email: email.required(),
    password: password.required(),
    confirmPassword: confirmPassword.required(),
    genre: genre.required(),
    
})
const updateUserSchema = Joi.object({
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    genre: genre,
    aboutMe: aboutMe,

})
const loginUserSchema = Joi.object({
    email: email.required(),
    password: password.required()

})

module.exports = { loginUserSchema, updateUserSchema,  createUserSchema}