var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var vezes = Number(lines.shift())

for(i=0;i<vezes;i++){
    valores = lines.shift().split(" ")
    var x = Number(valores[0])
    var y = Number(valores[1])

    if(y == 0){
        console.log('divisao impossivel')
    }else { 
        var resultado = x/y
        console.log(`${resultado.toFixed(1)}`)
    }
}