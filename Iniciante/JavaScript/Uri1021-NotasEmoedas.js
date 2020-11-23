var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n')

var valor = Number(valores.shift())

//NOTAS
console.log('NOTAS:')
var nota100 = Math.floor(valor/100)
console.log(`${nota100} nota(s) de R$ 100.00`)
valor -= nota100*100

var nota50 = Math.floor(valor/50)
console.log(`${nota50} nota(s) de R$ 50.00`)
valor -= nota50*50

var nota20 = Math.floor(valor/20)
console.log(`${nota20} nota(s) de R$ 20.00`)
valor -= nota20*20

var nota10 = Math.floor(valor/10)
console.log(`${nota10} nota(s) de R$ 10.00`)
valor -= nota10*10

var nota5 = Math.floor(valor/5)
console.log(`${nota5} nota(s) de R$ 5.00`)
valor -= nota5*5

var nota2 = Math.floor(valor/2)
console.log(`${nota2} nota(s) de R$ 2.00`)
valor -= nota2*2

//MOEDAS
console.log('MOEDAS:')
var moeda1 = Math.floor(valor/1)
console.log(`${moeda1} moeda(s) de R$ 1.00`)
valor -= moeda1*1

var moeda050 = Math.floor(valor/0.50)
console.log(`${moeda050} moeda(s) de R$ 0.50`)
valor -= moeda050*0.50

var moeda025 = Math.floor(valor/0.25)
console.log(`${moeda025} moeda(s) de R$ 0.25`)
valor -= moeda025*0.25

var moeda010 = Math.floor(valor/0.10)
console.log(`${moeda010} moeda(s) de R$ 0.10`)
valor -= moeda010*0.10

var moeda05 = Math.floor(valor/0.05)
console.log(`${moeda05} moeda(s) de R$ 0.05`)
valor -= moeda05*0.05

var moeda01 = Math.floor(valor/0.01)
console.log(`${moeda01} moeda(s) de R$ 0.01`)