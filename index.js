const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const { connectMongoDB } = require('./libs/mongo')
const routerJournal = require('./routes')
const { errorHandler , boomErrorHandler , logErrors} = require('./middlewares/error.handler')

// const session = require('express-session');
// const csrf= require('csurf');
// const MongoDBStore = require('connect-mongodb-session')(session);



app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


// cors 
const corsOptions = {
    origin: "https://still-brushlands-88997.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));



//  routes 
routerJournal(app)

// middlewares of to handle the errors
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


// star  the server port =3000
connectMongoDB(app)





