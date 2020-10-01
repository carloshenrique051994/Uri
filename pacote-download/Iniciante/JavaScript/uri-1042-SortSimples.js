var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var valores = lines.shift().split(" ")
var valor1 = Number(valores[0])
var valor2 = Number(valores[1])
var valor3 = Number(valores[2])

if(valor1 < valor2 && valor1 < valor3){
    console.log(valor1)
    if(valor2 < valor3){
        console.log(`${valor2}\n${valor3}`)   
    }else{
        console.log(`${valor3}\n${valor2}`)   
    }
}
if(valor2 < valor1 && valor2 < valor3){
    console.log(valor2)
    if(valor1 < valor3){
        console.log(`${valor1}\n${valor3}`)   
    }else{
        console.log(`${valor3}\n${valor1}`)   
    }
}
if(valor3 < valor2 && valor3 < valor1){
    console.log(valor3)
    if(valor1 < valor2){
        console.log(`${valor1}\n${valor2}`)   
    }else{
        console.log(`${valor2}\n${valor1}`)   
    }
}
console.log(`\n${valor1}`)
console.log(valor2)
console.log(valor3)