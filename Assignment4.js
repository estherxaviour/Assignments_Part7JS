/*Assignment4
Create a NodeJS application which will perform addition of number and subtraction of number
using function and both function will execute in series fashion using async node module.
You need install async module using npm command and then use async.series to execute these
two function in series fashion*/

var http = require('http');

var async = require("async");


var server = http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  async.series([
  function(callback) {
  var n1 =10;
  var n2 = 20;
  var tot = n1 +n2;
 response.write("The sum is" +" " + tot + "<br/>");
 callback(null, null); 
  },
  function(callback) {
  var n1 =10;
  var n2 = 20;
  var dif = n1 - n2;
  response.end("The dif is" + " " + dif);
  callback(null, null); 
  }],
  function(err, results) { response.end() });
    
});
  server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
