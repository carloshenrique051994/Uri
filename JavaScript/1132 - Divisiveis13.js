var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var x = Number(lines.shift())
var y = Number(lines.shift())

var soma = 0

if (x > y) {
    maior = x
    menor = y
} else {
    maior = y
    menor = x
}

while (menor <= maior) {
    if (menor % 13 !== 0) {
        soma += menor
    }
    menor += 1
}
console.log(soma)