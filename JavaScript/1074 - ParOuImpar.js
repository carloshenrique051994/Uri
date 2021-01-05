var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var contador = 0

while (contador < valor) {
    if (lines[contador] == 0) {
        console.log('NULL')
    }

    if (lines[contador] % 2 == 0) {
        if (lines[contador] > 0) {
            console.log('EVEN POSITIVE')
        }
        if (lines[contador] < 0) {
            console.log('EVEN NEGATIVE')
        }
    }

    if (lines[contador] % 2 != 0) {
        if (lines[contador] > 0) {
                console.log('ODD POSITIVE')
        }
        if (lines[contador] < 0) {
                console.log('ODD NEGATIVE')
        }
    }
    contador += 1
}