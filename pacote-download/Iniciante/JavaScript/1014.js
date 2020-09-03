var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split('\n')

var distancia = Number(valores.shift())
var totalCombustivel = Number(valores.shift())

var media = distancia / totalCombustivel

console.log(`${media.toFixed(3)} km/l`)