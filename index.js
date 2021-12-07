const express = require('express');
const path  = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')
const multer = require('multer')
const MongoStore = require('connect-mongo')
const config =require('./config/config')
//const csrf = require('csurf')()

const { connectMongoDB, MONGODB_URL } = require('./libs/mongo')
const routerJournal = require('./routes')
const port = process.env.PORT || 3000;
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')

//           ---------------------------------  cors       ---------------------------------

const corsOptions = {
  origin: "https://still-brushlands-88997.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(session({
  secret: process.env.SESSION_SECRET || config.sessionSecret,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: MONGODB_URL})
}
))



//                                 ---------------------  UPLOADING IMAGES    -----------------

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

app.use('/images', express.static(path.join(__dirname, 'images')));














//app.use(csrf())
app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));



//                    ------------------------ global variables  ---------------------------------
app.use( (req,res,next)=>{
  res.locals.isLoggedIn = req.session.isLoggedIn;
  //res.locals.cs =   req.csrfToken()
  res.locals.userName =  req.session.userName
  next()
})






//                --------------------------------- routes  ---------------------------------
routerJournal(app)

//                ---------------------------------  middlewares of to handle the errors  ---------------------------------
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)




//               ---------------------------------  start  the server port =3000  ---------------------------------
connectMongoDB().then( async ()=>{
  app.listen(port,()=>{ console.log('app listen ' )})
  
}) .catch(e=>{
  app.listen(port,()=>{ console.log('mongoDB not connected ---->' , e)})
})




