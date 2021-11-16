const  config = require('../config/config');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const boom = require('@hapi/boom')



const port = process.env.PORT || 3000;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const NAME = encodeURIComponent(config.dbName);
const MONGODB_URL = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${NAME}?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    family: 4
};

// funcion  to connect to mongodb
const connectMongoDB = async (app)=>{
    try{
        const connection  = await mongoose.connect(MONGODB_URL, options)

        // session config
        const sessionStore = new MongoDBStore({
            mongooseConnection: connection,
            collection: 'sessions'
        
        })

        app.use(
            session({
            secret: 'my secret', 
            resave : false ,
            saveUninitialized: false,
            store: sessionStore,
        }
        ));
            


        
        app.listen(port,()=>{ console.log('connected' )})
        

    }catch(e){
        app.listen(port,()=>{
            console.log('mongoDB not connected ---->' , e)
        })
        
        
    }
}


module.exports = { connectMongoDB }