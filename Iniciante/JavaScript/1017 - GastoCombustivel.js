var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n")

var tempo = Number(valores.shift())
var velocidade = Number(valores.shift())
var qtdeLitros = (tempo*velocidade)/12

console.log(`${qtdeLitros.toFixed(3)}`)