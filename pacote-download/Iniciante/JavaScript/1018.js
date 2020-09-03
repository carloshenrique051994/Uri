var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split('\n')

var notas = Number(valores.shift())
console.log(`${notas}`)

notas100 = Math.floor(notas/100)
console.log(`${notas100} nota(s) de R$ 100,00`)
notas -= notas100 * 100

notas50 = Math.floor(notas/50)
console.log(`${notas50} nota(s) de R$ 50,00`)
notas -= notas50 * 50

notas20 = Math.floor(notas/20)
console.log(`${notas20} nota(s) de R$ 20,00`)
notas -= notas20 * 20

notas10 = Math.floor(notas/10)
console.log(`${notas10} nota(s) de R$ 10,00`)
notas -= notas10 * 10

notas5 = Math.floor(notas/5)
console.log(`${notas5} nota(s) de R$ 5,00`)
notas -= notas5 * 5

notas2 = Math.floor(notas/2)
console.log(`${notas2} nota(s) de R$ 2,00`)
notas -= notas2 * 2

notas1 = Math.floor(notas/1)
console.log(`${notas1} nota(s) de R$ 1,00`)
notas -= notas1 * 1