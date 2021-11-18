const express = require('express');
const path  = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const  config = require('./config/config');

//const { connectMongoDB, MONGODB_URL } = require('./libs/mongo')
const routerJournal = require('./routes')
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')
//const User = require('./models/user.model');






const port = process.env.PORT || 3000;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const NAME = encodeURIComponent(config.dbName);
const MONGODB_URL = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${NAME}?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
};

// funcion  to connect to mongodb
mongoose.connect(MONGODB_URL, options).then(()=>{
  app.listen(port,()=>{ console.log('app listen ' )})
}) .catch(e=>{
              app.listen(port,()=>{ console.log('mongoDB not connected ---->' , e)})
          })
        
        
  


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




// start  the server port =3000




