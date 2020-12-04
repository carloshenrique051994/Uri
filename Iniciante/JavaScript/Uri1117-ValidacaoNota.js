var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contadorNotasValidas = soma = 0

while (contadorNotasValidas < 2) {
    var nota = Number(lines.shift())
    if (nota > 0 & nota <= 10){
        soma += nota
        contadorNotasValidas += 1         
    }else{
        console.log('nota invalida')
    }
}   
console.log(`media = ${(soma/2).toFixed(2)}`)


