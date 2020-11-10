const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome at site, that will generate ics file from weeia site');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
