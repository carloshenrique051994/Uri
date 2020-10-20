var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split()


var [x1, y1, x2, y2] = valores.shift().split(" ")
var x1 = parseFloat(x1)
var y1 = parseFloat(y1)
var x2 = parseFloat(x2)
var y2 = parseFloat(y2)
console.log(x1, y1, x2, y2)
