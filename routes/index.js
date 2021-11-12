const express = require('express');
const authRouter = require('./auth.router')
const journalRouter = require('./journal.router')


function routerJournal(app) {
  console.log('in the routes')
  const router  = express.Router()
  app.use(router);
  router.use('/', authRouter);
  router.use('/journal', journalRouter);
  //router.use('/users', usersRouter);
}

module.exports = routerJournal;