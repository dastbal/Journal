const boom = require('@hapi/boom');
const { types } = require('joi');


const Register = require('../models/register.model');

class RegisterService {
    constructor() {}
  
    async create(data,user) {
        try{
            // adding the user to the object
            const date =  data.date.toString()
            console.log(date)
            const dataUpdated = {...data, user ,date}
            const sheet = new Register( dataUpdated)
            await sheet.save();
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
    async find(user){
        let sheets =  await Register.find({user:user}).sort({'createdAt': -1}).populate('user')
        let x = [...sheets]
       
        
        return sheets

    }
    async countSheets(user){
        let count  =  await Register.countDocuments({user:user})
        
        
        return count

    }
    async findById(id){
        let sheet  =  await Register.findById(id)
        
        
        return sheet

    }
  

    
  }
  
  module.exports = RegisterService;