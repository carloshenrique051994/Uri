var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = [Number(input.split())]


for(i = 0; i < 10; i++ ){
    var valor = lines[i]
    var ultimo = lines[lines.length -1]
    var soma = lines.push(valor + ultimo)
    console.log(`N[${i}] = ${lines[i]}`)
}
