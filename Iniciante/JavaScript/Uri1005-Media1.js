var input = require("fs").readFileSync("stdin" ,"utf-8");

var valores = input.split("\n")
var a = Number(valores.shift())
var b = Number(valores.shift())
var media = (((a*3.5)+(b*7.5))/11)

console.log(`MEDIA = ${media.toFixed(5)}`)