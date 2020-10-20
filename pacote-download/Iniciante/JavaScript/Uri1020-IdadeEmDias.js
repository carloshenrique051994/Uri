var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n')

var idadeEmDias = Number(valores.shift())

var anos = Math.floor(idadeEmDias/365)
console.log(`${anos} ano(s)`)
idadeEmDias -= anos * 365

var meses = Math.floor(idadeEmDias/30)
console.log(`${meses} mes(es)`)
idadeEmDias -= meses * 30

console.log(`${idadeEmDias} dia(s)`)