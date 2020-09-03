var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split
("\n");

//Numero do funcionario
var numeroFunc = Number(valores.shift())

//quantas horas o funcionario trabalhou
var qtdHoras = Number(valores.shift())

//custo da hora desse funcionario
var valorHoras = Number(valores.shift()) 

var salario = parseFloat(qtdHoras*valorHoras)

console.log(`NUMBER = ${numeroFunc}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)