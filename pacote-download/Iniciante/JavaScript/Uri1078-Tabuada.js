var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var contador = 1

while (contador <= 10) {
    console.log(`${contador} x ${valor} = ${contador*valor}`)
    contador += 1
}
