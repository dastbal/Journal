const express = require('express');
const authRouter = require('./auth.router')
const journalRouter = require('./journal.router')
const registerRouter = require('./register.router')
const isAuth = require('../middlewares/is-auth')


function routerJournal(app) {
  const router  = express.Router()
  app.use(router);
  router.use('/', authRouter);
  router.use('/journal', isAuth, journalRouter);
}

module.exports = routerJournal;