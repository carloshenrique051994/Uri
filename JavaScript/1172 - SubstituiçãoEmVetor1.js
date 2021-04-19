var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var vetor = []

for(i=0;i< 10;i++){
    var valor = Number(lines.shift())
    if(valor < 1){
        valor = 1
    }
    vetor.push(valor)
    console.log(`X[${i}] = ${valor}`)
}

