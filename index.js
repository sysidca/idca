const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path')

mongoose.promise = global.Promise;
mongoose.connect(config.uri, (err) =>{
  if (err){
    console.log('Database Error', err);
  } else {
    console.log('Connected to databased: ' + config.uri);
  }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
