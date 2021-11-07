const express = require('express');
const authRouter = require('./auth.router')


function routerJournal(app) {
  console.log('hey there')
  const router  = express.Router()
  app.use(router);
  router.use('/', authRouter);
  //router.use('/users', usersRouter);
  //router.use('/users', usersRouter);
}

module.exports = routerJournal;