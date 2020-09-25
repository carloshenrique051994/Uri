var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");
var a = Number(valores[0])
var b = Number(valores[1])
var c = Number(valores[2])
var d = Number(valores[3])

if((b > c) && (d > a) && ((c+d) > (a+b)) && (c>0) && (d>0) && (a%2===0)){
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}
