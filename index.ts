var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendfile('index.html')
});

app.use(app.router);
app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log("Listening on " + port);
});
