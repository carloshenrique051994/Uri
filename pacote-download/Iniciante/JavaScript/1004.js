var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var a = Number(valores.shift())
var b = Number(valores.shift())

var PROD = a*b

console.log(`PROD = ${PROD}`)