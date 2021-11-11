const UserService = require('../services/user.service');
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs');
//const crypto = require('crypto');

const service  = new UserService()

exports.getLogin  = (req,res,next)=>{
    res.render('auth/login',{
        path: '/login',
        pageTitle: 'Login',
        errorMessage : null ,
        oldInput:null,
    })
}
exports.postLogin  = async (req,res,next)=>{
    const { password , email} = req.body 
    try{
        // to verify is the account exist if not  notify a error
        const user = await service.findOne(email )
        try{ if(!user){throw new Error()  }
        }catch(e){throw new Error("Invalid Email")}

        // verify is a password is valid
        const doMatch = await bcrypt.compare(password, user.password);
        if (doMatch){
            req.session.isLoggedIn = true ;  
            req.session.userName =  user.userName ;  
            req.session.user = user;
            // await req.session.save()        i had to remove this because was crushing the app and I did not why?
            return res.redirect('/journal/home')
        }
        try{ if(!doMatch){throw new Error()  }
        }catch(e){throw new Error("Invalid Password")}
            
    }catch(error){
        
        return next(new boom.badData(error))
        
    }
}
exports.getSignup  = (req,res,next)=>{
    res.render('auth/signup',{
        path: '/signup',
        pageTitle: 'Sign Up',
        errorMessage : null ,
        oldInput:null,
    })
}
exports.postSignup  = async (req,res,next)=>{
    
    try {
        // to verify if exist the email
        const user = await service.findOne(req.body.email )
        try{ if(user){throw new Error()  }
        }catch(e){ throw new Error("E-mail exists already, please pick a different one")  }

        // to create the new user
        await service.create(req.body)
        res.redirect('/')
    } catch (error) {
        return next(new boom.badRequest(error))
    }
}