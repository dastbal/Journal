const express = require('express');
const authRouter = require('./auth.router')
const journalRouter = require('./journal.router')
const registerRouter = require('./register.router')
const isAuth = require('../middlewares/is-auth')
const router = express.Router();
//const homeController = require("../controllers/home");
//const uploadController = require("../controllers/upload");

function routerJournal(app) {
  const router  = express.Router()
  app.use(router);
  router.use('/', authRouter);
  router.use('/journal', isAuth, journalRouter);
}

// let routes = app => {
//   router.get("/", homeController.getHome);

//   router.post("/upload", uploadController.uploadFiles);
//   router.get("/files", uploadController.getListFiles);
//   router.get("/files/:name", uploadController.download);

//   return app.use("/", router);
// };

//module.exports = routes;
module.exports = routerJournal;