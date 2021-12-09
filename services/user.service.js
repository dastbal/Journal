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
            const imageUrl =  "images/blank-profile-picture.png"
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
            await user.save()           
            
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
    async updatePassword(user , newPassword) {
        try{
            const password =  await bcrypt.hash(newPassword, 12)
            user.password = password;
            user.resetToken = undefined;
            user.resetTokenExpiration =  undefined;
            await user.save()           
            
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }

    async save(user) {
        try{
            await user.save()           
            
        }catch(e){
            next(new boom.serverUnavailable('Please try more late.'))
        }
    }
  
  
    async findOne(email ) {
        const user =  await User.findOne({email:email} )
        
        return user
    }
    async findOneByToken(Token ) {
        const user =  await User.findOne({resetToken : Token , resetTokenExpiration :{ $gt : Date.now()}} )
        
        return user
    }
    async findOneByTokenAndId(Token , id ) {
        const user =  await User.findOne({resetToken : Token , resetTokenExpiration :{ $gt : Date.now()} , _id : id} )
        
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