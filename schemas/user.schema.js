const Joi = require('joi');

const userName  = Joi.string().alphanum().min(5).max(15)
const email  = Joi.string().email()
const password  = Joi.string().alphanum().min(9).max(30)
const confirmPassword  = Joi.string().alphanum().min(9).max(30)
const genre  = Joi.string()

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

})

module.exports = { updateUserSchema,  createUserSchema}