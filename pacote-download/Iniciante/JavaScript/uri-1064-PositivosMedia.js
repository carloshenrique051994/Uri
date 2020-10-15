var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var positivos = 0
var soma = 0
for(i=0;i<6;i++){
    valor = Number(lines.shift())
    if(valor > 0){
        positivos += 1
        var soma = soma + valor
    }
}
var media = soma/positivos
console.log(`${positivos} valores positivos`)
console.log(`${media.toFixed(1)}`)