require('dotenv').config()

const config = {
  env : process.env.NODE_ENV   ||   'dev',
  port : process.env.PORT      ||  3000,
  dbUser : process.env.DB_USER     ,
  dbPassword : process.env.DB_PASSWORD,
  sessionSecret : process.env.SESSION_SECRET,
  dbName : process.env.DB_NAME ,
  email : process.env.EMAIL ,
}
module.exports = config

