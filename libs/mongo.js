const  config = require('../config/config');
const mongoose = require('mongoose');




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
const connectMongoDB =  (app)=>{
    try{
        const connection = mongoose.connect(MONGODB_URL, options, ()=>{
            console.log('mongoDB connected')
            app.listen(port,()=>{ console.log('app listen ' )})
        }

            )

        


        
        

    }catch(e){
        app.listen(port,()=>{
            console.log('mongoDB not connected ---->' , e)
        })
        
        
    }
}


module.exports = { connectMongoDB ,MONGODB_URL }