var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split("\n")

var contador = 0
while (contador < 10) {
    var valores = lines.shift().split(" ")
    //percorre o lines e separa a linha em valores(str) separados (exemplo que funcionou 5 2\n6 3\n5 0\n o resultado é cada 5\n2\n6\n3) cada \n significa que quebrou a linha

    var valor1 = Number(valores[0])//aqui eu converto em numero
    var valor2 = Number(valores[1])
    contador += 1
    console.log(`${valor1}`)
    console.log(valor2)

}