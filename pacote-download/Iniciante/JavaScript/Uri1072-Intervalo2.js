var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())

var contador = 0
var dentro = 0
var fora = 0

while (contador < valor) {
    if (lines[contador] >= 10 && lines[contador] <= 20){/*Aproveitando o contador para percorrer a lista (lines)*/
        dentro += 1
    } else {
        fora += 1
    }
contador += 1
}
console.log(`${dentro} in\n${fora} out`)