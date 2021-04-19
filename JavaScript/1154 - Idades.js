var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')


var contador = 0 
var total = 0

while (true){
    var valor = Number(lines.shift())
    if(valor >= 0){
        total += valor
        contador += 1
    }
    else{
        break;
    }
}

var total = total/contador
console.log(`${total.toFixed(2)}`)