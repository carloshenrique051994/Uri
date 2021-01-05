var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contadorNotasValidas = soma = 0

while (true) {
    notas = Number(lines.shift())

    if (contadorNotasValidas < 2) {
        if (notas > 0 && notas <= 10) {
            soma += notas
            contadorNotasValidas += 1

        }else {
            console.log('nota invalida')
        }
        if(contadorNotasValidas == 2){
            console.log(`media = ${(soma/2).toFixed(2)}`)
        }
    }

    if (contadorNotasValidas == 2) {

        if (notas != 1 && notas != 2) {
            console.log('novo calculo (1-sim 2-nao)')

        } if (notas == 1) {
            soma = 0
            contadorNotasValidas = 0

        } if (notas == 2) {
            break
        }
    }
}
