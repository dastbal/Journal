const boom = require('@hapi/boom')

const bcrypt = require('bcryptjs');
//const crypto = require('crypto');
//const nodemailer = require('nodemailer');
//const  sendgridTranport = require('nodemailer-sendgrid-transport');

const User = require('../models/user.model');

class UserService {
    constructor() {}
  
    async create(data ) {
        try{

            const password =  await bcrypt.hash(data.password, 12)
            const confirmPassword =  await bcrypt.hash(data.confirmPassword, 12)
            const imageUrl =  'https://picsum.photos/200'
            const dataUpdated = {...data, password, confirmPassword , imageUrl}
            //console.log(dataUpdated)
            const user = new User( dataUpdated)
            await user.save();
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
    

    async update(user) {
        try{
            console.log(user)
            await user.save()           
            
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
  
  
    async findOne(email ) {
        const user =  await User.findOne({email:email} )
        
        return user
    }
    async findById(id) {
        const user =  await User.findById(id)
        
        return user
    }
    async find( ) {
        const users =  await User.find()
        
        return users
    }
  
    
  }
  
  module.exports = UserService;