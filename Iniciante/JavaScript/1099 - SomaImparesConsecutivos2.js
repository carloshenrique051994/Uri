var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var casos = Number(lines.shift())

var soma = contador = 0
while (contador < casos) {
    lista = lines.shift().split(' ')
    var x = Number(lista.shift().split('\n'))
    var y = Number(lista.shift().split('\n'))
    console.log(`${x} ${y}`)

}
