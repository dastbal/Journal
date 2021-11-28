const boom = require('@hapi/boom');
const { types } = require('joi');


const Register = require('../models/register.model');

class RegisterService {
    constructor() {}
  
    async create(data,user) {
        try{
            // adding the user to the object
            const dataUpdated = {...data, user}
            const sheet = new Register( dataUpdated)
            await sheet.save();
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
    async find(user){
        let sheets =  await Register.find({user:user})
        let x = [...sheets]
        x = x.forEach(sheet => {
            
        });
        
        return sheets

    }
  

    
  }
  
  module.exports = RegisterService;