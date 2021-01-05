var input = require("fs").readFileSync("stdin" ,"utf-8");

var valores = input.split("\n")

var a = Number(valores.shift())
var b = Number(valores.shift())
var c = Number(valores.shift())

var media = Number(((a*2) + (b*3) + (c*5))/10)

console.log(`MEDIA = ${media.toFixed(1)}`)