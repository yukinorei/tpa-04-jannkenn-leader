const express = require('express');
const bodyParser = require('body-parser');

const {
  handlePostPlay,
  handleFetchLeaderboard,
} = require('./controller');

const setup = (app) => {
  app.use(bodyParser.json());

  const apiRouter = express.Router();

  apiRouter.post('/play', handlePostPlay);
  apiRouter.get('/leaders', handleFetchLeaderboard);

  app.use('/api', apiRouter);
};

module.exports = setup;
