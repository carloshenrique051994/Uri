var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var salario = Number(lines.shift())

if (salario <= 400.00){
    aumento = salario*0.15
    porcentagem = 15
}
if (salario >= 400.01 && salario <= 800.00){
    aumento = salario*0.12
    porcentagem = 12
}
if (salario >= 800.01 && salario <= 1200.00){
    aumento = salario*0.10
    porcentagem = 10
}
if (salario >= 1200.01 && salario <= 2000.00){
    aumento = salario*0.07
    porcentagem = 7
}
if (salario > 2000.00 ){
    aumento = salario*0.04
    porcentagem = 4
}
console.log(`Novo salario: ${(salario+aumento).toFixed(2)}
Reajuste ganho: ${aumento.toFixed(2)}
Em percentual: ${porcentagem} %`)
