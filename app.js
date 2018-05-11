const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
require('dotenv').config();

// const api = require('./server/routes/api');

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use(express.static(path.join(__dirname, '/dist/')));
app.use(express.static(path.join(__dirname, '/dist/Kasteelo')));

app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

// app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/Kasteelo/index.html'));
});

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
