var express = require('express'),
  http = require('http'),
  app = express(),
  portNumber = process.env.PORT || 3000;

app.use(express.static(__dirname + "/www"));
app.use('/js', express.static(__dirname + "/www/js"));
app.use('/bower', express.static(__dirname + "/www/bower_components"));


app.all('*', function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('/www/index.html', {root: __dirname});
});


app.on("customEvent", function (req, res) {
  console.log('Test test');
});

app.listen(portNumber, function () {
  console.log('Server started on port:' + portNumber);
});
