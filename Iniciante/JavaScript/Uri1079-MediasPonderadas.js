var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
var contador = contador2 = media = 0
var pesos = [2, 3, 5]

while (contador < valor) {
    var notas = lines.shift(contador).split(' ')
    while (contador2 < 3) {
        var notasPcalculo = Number(notas[contador2] * pesos[contador2])//Aproveitando o loop('contador')
        media += notasPcalculo //media é o acumulador de valores
        contador2 += 1
    }
    console.log(`${(media / 10).toFixed(1)}`)
    media = notasPcalculo = contador2 = 0
    contador += 1
}