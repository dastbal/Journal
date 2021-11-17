const express = require('express');
const path  = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')


const { connectMongoDB, MONGODB_URL } = require('./libs/mongo')
const routerJournal = require('./routes')
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')
//const User = require('./models/user.model');

// star  the server port =3000
connectMongoDB(app)


app.use(session({
  secret: 'journal',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: MONGODB_URL})
}
))





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





// global variables
app.use( (req,res,next)=>{
  res.locals.isLoggedIn = req.session.isLoggedIn;
  //res.locals.csrfToken =  req.csrfToken()
  res.locals.userName =  req.session.userName
  console.log(res.locals.userName)
  next()
})
  
//  routes 
routerJournal(app)

// middlewares of to handle the errors
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)







