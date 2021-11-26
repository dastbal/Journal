const mongoose = require('mongoose');
const Schema  =mongoose.Schema
const registerSchema = new Schema({
    
    title: {
        type :String,
    },
    date: {
        type :Date,
        default :Date.now,
    },
    place: {
        type :String,
        required: true,
    },
    yourDay: {
        type :String,
    },
    sadExp: {
        type :String,
    },
    happyExp: {
        type :String,
    },
    toShare:{
        type:String,
    },
    spiritExp: {
        type :String,
    },
    lessonLearned: {
        type :String,
    },
    user:{
        type: Schema.Types.ObjectId ,
        ref:'User',
        required : true,
    }
    

},{timestamps:true})

module.exports = mongoose.model('Register',registerSchema);