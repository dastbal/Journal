const  config = require('../config/config');
const mongoose = require('mongoose');




const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const NAME = encodeURIComponent(config.dbName);
const MONGODB_URL = process.env.MONGODB_URL  || `mongodb+srv://${USER}:${PASSWORD}@cluster0.gimcb.mongodb.net/${NAME}?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
};

// funcion  to connect to mongodb
const connectMongoDB = async  ()=>   {
    const connected   = await mongoose.connect(MONGODB_URL, options)
    return connected
  }


module.exports = { connectMongoDB ,MONGODB_URL }