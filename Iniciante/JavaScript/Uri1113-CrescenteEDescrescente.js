var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')


while (true) {
    var valor = lines.shift().split(" ")

    var valor1 = Number(valor[0])
    var valor2 = Number(valor[1])
    if(valor1 != valor2){
        if (valor1 > valor2) {
            console.log('Decrescente')
        } else {
            console.log('Crescente')
        }
    } else {
        break
    }
}