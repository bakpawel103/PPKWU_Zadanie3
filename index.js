const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
    getCalendarFromUrl(req.body.rok, req.body.miesiac, req.body.lang, function(result) {
      const dom = new JSDOM(result);
      var events = [];

      for(let nodeListIndex = 0; nodeListIndex < dom.window.document.querySelectorAll("td.active").length; nodeListIndex++) {
        var eventDay = dom.window.document.querySelectorAll("td.active")[nodeListIndex].querySelectorAll("a.active")[0].innerHTML;
        var eventName = dom.window.document.querySelectorAll("td.active")[nodeListIndex].getElementsByClassName("InnerBox")[0].firstChild.innerHTML;

        events.push({
          day: eventDay,
          name: eventName
        });
      }

      res.json({ result: events });
    });
  }
});

var getCalendarFromUrl = (year, month, lang, callback) => {
  http.get(`http://www.weeia.p.lodz.pl/pliki_strony_kontroler/kalendarz.php?rok=${year}&miesiac=${month}&lang=${lang}`, function(res) {
    var data = [];

    res.on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      data = Buffer.concat(data).toString();
      callback(data);
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
