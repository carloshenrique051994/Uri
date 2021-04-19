var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var vezes = Number(lines.shift())

var contador = soma = 0

while(vezes > 0){
    var valores = lines.shift().split(" ")
    var valor1 = Number(valores[0])
    var valor2 = Number(valores[1])
    while(contador < valor2){
        if(valor1 % 2 != 0){
            soma += valor1
            contador += 1
            valor1 += 1
        }else{
            valor1 += 1
        }
    }
    console.log(soma)
    contador = soma =0
    vezes -= 1
}




