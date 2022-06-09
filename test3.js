const express = require('express'),
  morgan = require('morgan'),
  fs = require('fs'), //import built in modules fs and path
  path = require('path');

const app = express();

// let myLogger = (req, res, next) => {
//   console.log(req.url);
//   next();
// };

//create a write stream(in append mode)
// a 'log.txt' file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {
  flags: 'a',
});

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

// app.use(myLogger);
app.use(requestTime);
// app.use(morgan('common'));

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  let responseText = 'Welcome to my app!';
  responseText += ' <small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);
});

app.get('/secreturl', (req, res) => {
  let responseText = 'This is a secret url with super top-secret content.';
  responseText += ' <small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
