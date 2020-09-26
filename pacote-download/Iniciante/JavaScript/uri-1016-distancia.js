var input = require("fs").readFileSync("stdin", "utf-8");

var valor = input.split("\n")

var kilometros = Number(valor.shift())
var minutos = (60*kilometros)/30

console.log(`${minutos} minutos`)