var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor1 = Number(lines.shift())
var valor2 = Number(lines.shift())
var maior = valor1
var menor = valor2
var total = 0

if (valor2 > valor1) {
    maior = valor2
    menor = valor1
}

for (i = menor + 1; i < maior; i++) {
    if (i % 2 != 0) {
        total += i
    }
}
console.log(total)




