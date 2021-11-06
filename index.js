const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
// const session = require('express-session');
// const csrf= require('csurf');
// const MongoDBStore = require('connect-mongodb-session')(session);


router(app);