const express = require('express');
const portfinder = require('portfinder');

// Router for the api
const apiRoute = require('./routes/api');

// init express
const app = express();

//Don't advertise that this is express
app.disable('x-powered-by');

//Deploy API
app.use('/ascii', apiRoute.getRoute());

// find an open port
portfinder.getPort((err, port) => {
  if (err) {
    throw err;
  }
  // start the server
  app.listen(port, () => console.log(`Running on :${port}`));
});
