var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contador = soma = 0

while(true){
    var valor = Number(lines.shift())
    if(valor == 0){
        break
    }
    while(contador < 5){
        if(valor % 2 ==  0){
            soma += valor
            contador += 1
        }
        valor += 1
    }
    console.log(soma)
    contador = soma = 0
}
