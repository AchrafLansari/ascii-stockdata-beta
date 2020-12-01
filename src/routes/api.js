//Node
const express = require('express');
const bodyParser = require('body-parser');

//Controllers
const generateAsciiChart = require('./../controllers/ascii')

//Config
const config = require('./../config/config');

const api = {};


var apiRoutes = express.Router();
apiRoutes.use(bodyParser.json());



apiRoutes.get('/', async (req, res, next) => {
  if (req.query) {
    const asciiChart = await generateAsciiChart(req.query);
    if (asciiChart)
      res.status(200).send(asciiChart);
    else
      res.status(400).send('Bad Request : Missing or Incorrect Parameters,Please Read The Api Documentation');
  }
})

/**
 * Universal error handling. Any routes further up that call next(err) will be
 * processed here
 */
apiRoutes.use((err, req, res, next) => {
  console.log('Error', err);

  if (res.headersSent) {
    //This error has occurred after the API has returned something to the
    //user, just log it
    console.error('Error after response sent: ', err);
  } else {
    res.statusCode = 500;
    res.json(err);
  }
});

api.getRoute = () => {
  return apiRoutes;
};

module.exports = api;
