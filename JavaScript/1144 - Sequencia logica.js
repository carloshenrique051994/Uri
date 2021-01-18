var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = lines.shift()

for(contador = 1;contador <= valor; contador++){
    console.log(`${contador} ${contador*contador} ${contador*contador*contador}`)
   
    console.log(`${contador} ${contador*contador+1} ${contador*contador*contador+1}`)
}


