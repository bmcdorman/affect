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

///////

var express = require("express");
var app = express();

console.log(__dirname + '/public');
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/'));

app.listen(8888, () => {
   console.log("Listening on " + 8888);
});
