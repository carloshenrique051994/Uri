var input = require('fs').readFileSync('JavaScript/stdin', 'utf8').split("\n");

var lista = []
var maior = contador = 0


while (contador < 100){
    lista[lista.length] = Number(input[contador])//[lista.length] adiciona ao final da lista 'lista', o resto do codigo converte os valores da lista 'input' de string para Number, input[contador vai percorrendo os indices]
    if(lista[contador] > maior){
        maior = lista[contador]
    }
    contador += 1
}
console.log(maior)
console.log(lista.indexOf(maior)+1)//indexof descobre o indice do valor

