var input = require("fs").readFileSync("stdin", "utf-8");

var pecas = input.split("\n")

var [idPeca1, numeroDePecas1, valorPeca1] = pecas.shift().split(" ")
var [idPeca2, numeroDePecas2, valorPeca2] = pecas.shift().split(" ")

var valorTotalPeca1 = numeroDePecas1*valorPeca1
var valorTotalPeca2 = numeroDePecas2*valorPeca2

var totalEmPecas = valorTotalPeca1+valorTotalPeca2

console.log(`VALOR A PAGAR: R$ ${totalEmPecas.toFixed(2)}`)