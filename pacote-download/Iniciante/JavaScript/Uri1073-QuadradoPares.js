var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var contador = 2

while(contador <= valor){
    console.log(`${contador}^2 = ${contador**2}`)
    contador += 2
}