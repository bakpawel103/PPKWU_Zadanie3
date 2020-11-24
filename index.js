const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const htmlTableToJson = require('html-table-to-json');

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
    var jsonHtmlString = getCalendarFromUrl(req.body.rok, req.body.miesiac, req.body.lang, function(result) {
      //console.log(result);

      res.json({ result: result });
    });
  }
});

var getCalendarFromUrl = (year, month, lang, callback) => {
  http.get(`http://www.weeia.p.lodz.pl/pliki_strony_kontroler/kalendarz.php?rok=${year}&miesiac=${month}&lang=${lang}`, function(res) {
    var data = [];

    res.on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      let b = new Buffer(Buffer.concat(data).toString('base64'), 'base64')
      var htmlString = b.toString();
      console.log(htmlString);
      callback(htmlTableToJson.parse(htmlString).results);
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
