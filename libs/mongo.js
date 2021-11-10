const  config = require('../config/config');
const mongoose = require('mongoose');


const port = process.env.PORT || 3000;
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

// funcion  to connect to mongodb
const connectMongoDB = async (app)=>{
    try{

        const connect =  await mongoose.connect(MONGODB_URL, options)
        
        app.listen(port,()=>{ console.log('connected' )})
        

    }catch(e){
        app.listen(port,()=>{ console.log('mongoDB not connected ---->' , e)})
        
    }
}

module.exports = { connectMongoDB }