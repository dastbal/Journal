const express = require('express');
const authRouter = require('./auth.router')


function router(app) {
  const router = express.Router();
  app.use(router);
  router.use('/', authRouter);
  //router.use('/users', usersRouter);
}

module.exports = router;