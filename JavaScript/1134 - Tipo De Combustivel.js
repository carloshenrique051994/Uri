var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contadorAlcool = contadorGasolina = contadorDiesel = 0

while (tipoCombustivel != 4) {
    var tipoCombustivel = Number(lines.shift())
    switch (tipoCombustivel) {
        case 1: contadorAlcool++; break;
        case 2: contadorGasolina++; break;
        case 3: contadorDiesel++; break;
        default: break;
    }
}
console.log(`MUITO OBRIGADO\nAlcool: ${contadorAlcool}\nGasolina: ${contadorGasolina}\nDiesel: ${contadorDiesel}`)