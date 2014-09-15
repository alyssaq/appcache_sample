var express = require('express');
var app = express();
var folder = __dirname + '/public';
app.use(express.static(folder));

app.get('/', function(req, res){
  res.sendFile(folder + '/clock.html');
});

app.listen(process.env.PORT || 3000);