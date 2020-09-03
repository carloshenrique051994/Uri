var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var a = Number(valores.shift())
var b = Number(valores.shift())
var c = Number(valores.shift())
var d = Number(valores.shift())

var diferenca = (a*b-c*d)
console.log(`DIFERENCA = ${diferenca}`)