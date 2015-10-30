declare var __dirname: string;
declare function require(s: string): any;

declare class Env
{
  PORT: number;
}

declare class process
{
  static env: Env;
}

var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.sendfile('index.html')
});

app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log("Listening on " + port);
});
