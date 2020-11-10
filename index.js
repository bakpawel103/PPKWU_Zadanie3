const express = require('express');
const https = require('http');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome at site, that will generate ics file from weeia site');
});

app.get('/getIcs', (req, res) => {
  if(!req.body || (!req.body.rok || isNaN(parseInt(req.body.rok))) ||
      (!req.body.miesiac || isNaN(parseInt(req.body.miesiac))) ||
      (!req.body.lang || isNaN(parseInt(req.body.lang)))) {
    res.status(500).send("Pass body with string property");
  } else {
    res.json({ result: req.body });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
