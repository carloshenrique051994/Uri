var input = require("fs").readFileSync("stdin", "utf-8");
var valores = input.split("\n");

var A = Number(valores.shift())
var B = Number(valores.shift())

var x = A+B
console.log(`X = ${x}`)