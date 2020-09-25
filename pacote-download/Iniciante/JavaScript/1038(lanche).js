var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pedido = lines.shift().split(" ")

var codigo = Number(pedido[0])
var quantidade = Number(pedido[1])
var valor = 0
if (codigo == 1){
    valor = 4.00
}if (codigo == 2) {
    valor = 4.50
}if (codigo == 3) {
    valor = 5.00
}if (codigo == 4) {
    valor = 2.00 
} if (codigo == 5) {
    valor = 1.50 
} 

var total = quantidade*valor

console.log(`Total: R$ ${total.toFixed(2)}`)