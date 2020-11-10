const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome at site, that will generate ics file from weeia site');
});
