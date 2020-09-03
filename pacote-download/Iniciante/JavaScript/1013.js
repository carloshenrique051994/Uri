var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split()

var [a, b, c] = valores.shift().split(" ")
var a = Number(a)
var b = Number(b)
var c = Number(c)
var ab = (a+b + (Math.abs(a-b)))/2
var abc = (ab+c + (Math.abs(ab-c)))/2

console.log(`${abc} eh o maior`)