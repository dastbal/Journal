const express = require('express');
const authRouter = require('./auth.router')
const journalRouter = require('./journal.router')
const registerRouter = require('./register.router')


function routerJournal(app) {
  console.log('in the routes')
  const router  = express.Router()
  app.use(router);
  router.use('/', authRouter);
  router.use('/journal', journalRouter);
}

module.exports = routerJournal;