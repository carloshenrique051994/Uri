var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var x = Number(lines.shift())
var y = Number(lines.shift())

var soma = 0

if (x > y) {
    for (contador = y + 1; contador < x; contador++) {
        if(contador % 5 == 2 || contador % 5 == 3){
            console.log(contador)
        }
    }
}else {
    for (contador = x + 1; contador < y; contador++) {
        if(contador % 5 == 2 || contador % 5 == 3){
            console.log(contador)
        }
    }
}