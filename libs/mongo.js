const  config = require('../config/config');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const port = process.env.PORT || 3000;
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const MONGODB_URL = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${config.dbName}?retryWrites=true&w=majority`
const MONGODB_URI = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${config.dbName}`
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
            

        const connect =  await mongoose.connect(MONGODB_URL, options)
        
        app.listen(port,()=>{ console.log('connected' )})
        

    }catch(e){
        app.listen(port,()=>{ console.log('mongoDB not connected ---->' , e)})
        
    }
}
const userSession = async (app)=>{
    try{
            // session config
            const store = new MongoDBStore({
                uri : MONGODB_URI,
                collection: 'sessions'
            
            })

            app.use(
                session({
                secret: 'my secret', 
                resave : false ,
                saveUninitialized: false,
                store: store,
            }
            ));

        
        

    }catch(e){
        console.log(e)
        
    }
}

module.exports = { connectMongoDB, userSession }