var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var vezes = Number(lines.shift())
var animais = contador = contadorBixo = contadorCoelho = contadorRato = contadorSapo = lista = quantidade = 0

while (contador < vezes) {
    var lista = lines.shift().split(' ')
    quantidade = Number(lista.shift().split('\n'))
    animais = String(lista.shift().split('\n'))

    if ("C" == animais) {
        contadorCoelho += quantidade
    }
    if ('R' == animais) {
        contadorRato += quantidade
    }
    if ('S' == animais) {
        contadorSapo += quantidade
    }

    contador += 1
    contadorBixo += quantidade
}

console.log(`Total: ${contadorBixo} cobaias
Total de coelhos: ${contadorCoelho}
Total de ratos: ${contadorRato}
Total de sapos: ${contadorSapo}
Percentual de coelhos: ${((contadorCoelho / contadorBixo)* 100).toFixed(2)} %
Percentual de ratos: ${((contadorRato / contadorBixo) * 100).toFixed(2)} %
Percentual de sapos: ${((contadorSapo / contadorBixo) * 100).toFixed(2)} %`)