var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var pares = 0
var impares = 0
var positivos = 0
var negativos = 0

for(i=0;i<5;i++){
    valor = Number(lines.shift())
    if(valor%2===0){
        pares += 1
    }
    if(valor%2!== 0){
        impares += 1
    }
    if(valor>0){
        positivos += 1
    }
    if(valor<0){
        negativos += 1
    }
}
console.log(`${pares} valor(es) par(es)\n${impares} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`)

