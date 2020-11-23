var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var pares = 0
for(i=0;i<5;i++){
    valor = Number(lines.shift())
    if(valor%2===0){
        pares += 1
    }
}
console.log(`${pares} valores pares`)

// O for faz um loop para coletar todos os valores, no caso do exercicio, são passados 5 valores
// a variavel valor pega os valores da lista lines
// O if somente ira acrescentar +1 a variavel "pares" se a condição (valor%2===0 se o resultado for 0 é par, se for 1 é impar) for comprida.