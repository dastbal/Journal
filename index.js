const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const routerJournal = require('./routes')
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')

// const session = require('express-session');
// const csrf= require('csurf');
// const MongoDBStore = require('connect-mongodb-session')(session);



const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


const  config = require('./config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const MONGODB_URL = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${config.dbName}?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    family: 4
};




// cors 
const corsOptions = {
    origin: "https://cse341ecommerceapp.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));



//  routes 
routerJournal(app)

// middlewares of to handle the errors
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)



// funcion  to connect to mongodb
const connectMongoDB = async ()=>{
    try{

        const connect =  await mongoose.connect(MONGODB_URL, options)
        
        app.listen(port,()=>{ console.log('connected' )})
        

    }catch(e){
        app.listen(port,()=>{ console.log('mongoDB not connected ---->' , e)})
        
    }
}


connectMongoDB()





