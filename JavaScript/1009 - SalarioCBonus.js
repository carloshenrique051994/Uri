var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n")

var nomeVendedor = valores.shift()
var salario = Number(valores.shift())
var vendas = Number(valores.shift())
var comissao = vendas * 0.15
var total = salario + comissao

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
