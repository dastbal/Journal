const boom = require('@hapi/boom')

const bcrypt = require('bcryptjs');
const crypto = require('crypto');
//const nodemailer = require('nodemailer');
//const  sendgridTranport = require('nodemailer-sendgrid-transport');

const User = require('../models/user.model');

class UserService {
    constructor() {}
  
    async create(data) {
        try{

            const password =  await bcrypt.hash(data.password, 12)
            const confirmPassword =  await bcrypt.hash(data.confirmPassword, 12)
            const dataUpdated = {...data, password, confirmPassword}
            console.log(dataUpdated)
            const user = new User( dataUpdated)
            await user.save();
        }catch(e){
            next(new boom.serverUnavailable("Please try more late."))
        }
    }
  
    // async find() {
  
    //   const rta = await models.User.findAll()
    //   return rta;
    // }
  
    async findOne(email) {
        const userDoc  =  await User.findOne({email:email})
        //console.log('usedoc',userDoc)
        if(userDoc){
            throw new boom.badRequest('E-mail exists already, please pick a different one')
            
        }
    }
  
    // async update(id, changes) {
    //   const user =  await this.findOne(id);
    //   const rta = await  user.update(changes);
    //   return rta ;
    // }
  
    // async delete(id) {
    //   const user =  await this.findOne(id);
    //   await user.destroy();
    //   return { id };
    // }
  }
  
  module.exports = UserService;