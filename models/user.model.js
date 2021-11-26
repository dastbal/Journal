const mongoose = require('mongoose');
const Schema  =mongoose.Schema
const userSchema = new Schema({
    
    userName: {
        type :String,
        required: true,
    },
    email: {
        type :String,
        required: true,
    },
    password: {
        type :String,
        required: true,
    },
    confirmPassword: {
        type :String,
        required: true,
    },
    genre: {
        type :String,
        required: true,
    },
    aboutMe: {
        type: String,
    },
    resetToken: String,
    resetTokenExpiration: Date,
    
})

module.exports = mongoose.model('User',userSchema);