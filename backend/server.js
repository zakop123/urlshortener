var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var googl = require('goo.gl')

var app = express();
app.use(bodyParser.json());
app.use(cors());

googl.setKey('AIzaSyDyZ19d2Ra3uSRIsx7JJsqoZG6ZlBAmRxg');
googl.getKey();

app.post('/api/shorten', function(req, res) {
  googl.shorten(req.body.long_url)
  .then(function (short_url) {
    res.send(short_url);
  })
  .catch(function (err) {
    console.error(err.message);
  });
});

app.post('/api/clicks', function(req,res) {
  googl.analytics(req.body.url,{projection: 'ANALYTICS_CLICKS'})
  .then(function(result) {
    res.send(result);
  })
  .catch(function (err) {
    console.error(err.message);
  });
});


app.listen(3000, function() {
  console.log('Server running on port 3000');
});
