var express = require('express');
var app = express();
var folder = __dirname + '/public';
var port = process.env.PORT;
app.use(express.static(folder));

app.get('/', function(req, res){
  res.sendFile(folder + '/clock.html');
});

app.listen(port|| 3000);
console.log('Server up at port: ' + port);