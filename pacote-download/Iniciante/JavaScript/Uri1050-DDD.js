var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var ddd = Number(lines.shift())

switch(ddd){
    case 61: console.log('Brasilia'); break
    case 71: console.log('Salvador'); break
    case 11: console.log('Sao Paulo'); break
    case 21: console.log('Rio de Janeiro'); break
    case 32: console.log('Juiz de Fora'); break
    case 19: console.log('Campinas'); break
    case 27: console.log('Vitoria'); break
    case 31: console.log('Belo Horizonte'); break
    default: console.log('DDD nao cadastrado');
}

/*
if (ddd === 61){
    console.log('Brasilia')
}
if (ddd === 71){
    console.log('Salvador')
}
if (ddd === 11){
    console.log('Sao Paulo')
}
if (ddd === 21){
    console.log('Rio de Janeiro')
}
if (ddd === 32){
    console.log('Juiz de Fora')
}
if (ddd === 19){
    console.log('Campinas')
}
if (ddd === 27){
    console.log('Vitoria')
}
if (ddd === 31){
    console.log('Belo Horizonte')
}if(ddd != 61,71,11,21,32,10,27,31){
    console.log('DDD nao cadastrado')
}*/