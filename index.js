const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes')

// const session = require('express-session');
// const csrf= require('csurf');
// const MongoDBStore = require('connect-mongodb-session')(session);

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));

// 
router(app);

app.listen(port)





