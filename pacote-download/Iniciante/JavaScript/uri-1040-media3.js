var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')


var valores = lines.shift().split(" ")
var nota1 = Number(valores[0])
var nota2 = Number(valores[1])
var nota3 = Number(valores[2])
var nota4 = Number(valores[3])
var nota5 = Number(valores[4])
var media = ((nota1 + nota2 + nota3 + nota4)/4)
console.log(`Media: ${media.toFixed(1)}`)
if (media >5.0 && media < 6.9){
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${nota5}`)
    var recalcular = (media+nota5)/2
    if (recalcular >= 5.0)
        console.log('Aluno aprovado')
    if (recalcular <= 4.9){
        console.log('Aluno reprovado')
    }
    console.log(`Media final: ${recalcular}`)
}
if (media>=7.0){
    console.log('Aluno aprovado.')
} else {
    console.log('Aluno reprovado')
}