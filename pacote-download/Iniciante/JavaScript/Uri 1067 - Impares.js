var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var impar = 0

for (i = 0; i <= valor; i++) {
    if (i % 2 !== 0) {
        console.log(`${i}`)
    }
}


