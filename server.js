// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyparser = require('body-parser');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

function logger(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip )
    next();
    }
app.get('/api/timestamp/:date?',bodyparser.urlencoded({extended: false}),function(req,res){
        var date = req.params.date;
          if(date==null)
          var ts = new Date();
          else
            var ts = new Date(isNaN(date) ? date : date*1000)
            res.json({"unix": ts.getTime(), "utc": ts.toUTCString()})
          }
        );
// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
