var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var valor = Number(lines.shift())
for(i = 1; i <= valor; i ++){
    if(valor % i == 0){ console.log(`${i}`)}
}