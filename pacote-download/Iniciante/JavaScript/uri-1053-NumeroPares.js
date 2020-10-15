var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var  contador = 1
while(contador <= 100){
    var par = contador%2
    if(par == 0){
        console.log(`${contador}`)
    }
    contador += 1
}