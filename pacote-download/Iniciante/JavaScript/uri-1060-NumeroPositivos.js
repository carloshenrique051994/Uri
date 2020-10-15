var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var positivos = 0
for(i=0;i<6;i++){
    var valor = Number(lines.shift())
    if(valor > 0){
        var positivos = positivos + 1
    }
}
console.log(`${positivos} valores positivos`)
