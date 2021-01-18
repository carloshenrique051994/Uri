var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contadorLinhas = 0
var numero = 1

var valor = lines.shift()
while(contadorLinhas < valor){
    console.log(`${numero} ${numero+1} ${numero+2} PUM`)
    numero += 4
    contadorLinhas += 1
}