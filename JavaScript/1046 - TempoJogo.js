var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var horas = lines.shift().split(" ")
var horaInicial = Number(horas[0])
var horaFinal = Number(horas[1])

if(horaInicial > horaFinal){
    console.log(`O JOGO DUROU ${24-(horaInicial-horaFinal)} HORA(S)`)
}
if(horaInicial < horaFinal){
    console.log(`O JOGO DUROU ${horaFinal-horaInicial} HORA(S)`)
}
if(horaInicial === horaFinal){
    console.log('O JOGO DUROU 24 HORA(S)')
}