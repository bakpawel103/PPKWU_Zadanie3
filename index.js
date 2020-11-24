const express = require('express');
const http = require('http');
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
    getCalendarFromUrl(req.body.rok, req.body.miesiac, req.body.lang);

    res.json({ result: req.body });
  }
});

var getCalendarFromUrl = (year, month, lang) => {
  http.get(`http://www.weeia.p.lodz.pl/pliki_strony_kontroler/kalendarz.php?rok=${year}&miesiac=${month}&lang=${lang}`, function(res) {
    var data = [];

    res.on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      let b = new Buffer(Buffer.concat(data).toString('base64'), 'base64')
      var htmlString = b.toString();
      console.log(htmlString);
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
