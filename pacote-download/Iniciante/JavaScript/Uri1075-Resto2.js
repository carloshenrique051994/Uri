var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var contador = 1

while (contador < 10000) {
    if (contador % valor == 2) {
        console.log(contador)
    }
    contador += 1
}