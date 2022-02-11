
  const express = require('express');
  const path = require('path');
  
  const app = express();
  const port = process.env.PORT || 8080;
  app.use(express.static('public'))

  // sendFile will go here
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/calculator.html'));
  });
  app.listen(port)

  