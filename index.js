const express = require('express');
const path  = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const { connectMongoDB , userSession } = require('./libs/mongo')
const routerJournal = require('./routes')
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')
const User = require('./models/user.model');






app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));



// cors 
const corsOptions = {
    origin: "https://still-brushlands-88997.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


// session config
userSession(app)

app.use( async (req,res,next)=>{
    if(!req.session.user){
        return next()
    }
    let user 
    try{
      user = await User.findById(req.session.user._id)
    }catch(e){
      return next(new Error(e) )
    }
    req.user= user;
    next()
  })


// global variables
app.use( (req,res,next)=>{
  res.locals.isLoggedIn = req.session.isLoggedIn;
  //res.locals.csrfToken =  req.csrfToken()
  res.locals.userName =  req.session.userName
  //console.log(res.locals.userName)
  next()
})
  
//  routes 
routerJournal(app)

// middlewares of to handle the errors
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


// star  the server port =3000
connectMongoDB(app)





