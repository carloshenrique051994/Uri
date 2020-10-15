var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var vertebradoOuInvertebrado = String(lines.shift())
var especie = String(lines.shift())
var caracteristica = String(lines.shift())

//vertebrado
if (vertebradoOuInvertebrado === 'vertebrado' && especie === 'ave' && caracteristica === 'carnivoro'){
    console.log('aguia')
}
if (vertebradoOuInvertebrado === 'vertebrado' && especie === 'ave' && caracteristica === 'onivoro'){
    console.log('pomba')
}
if (vertebradoOuInvertebrado === 'vertebrado' && especie === 'mamifero' && caracteristica === 'onivoro'){
    console.log('homem')
}
if (vertebradoOuInvertebrado === 'vertebrado' && especie === 'mamifero' && caracteristica === 'herbivoro'){
    console.log('vaca')
}

//invertebrado
if (vertebradoOuInvertebrado === 'invertebrado' && especie === 'inseto' && caracteristica === 'hematofago'){
    console.log('pulga')
}
if (vertebradoOuInvertebrado === 'invertebrado' && especie === 'inseto' && caracteristica === 'herbivoro'){
    console.log('lagarta')
}
if (vertebradoOuInvertebrado === 'invertebrado' && especie === 'anelideo' && caracteristica === 'hematofago'){
    console.log('sanguessuga')
}
if (vertebradoOuInvertebrado === 'invertebrado' && especie === 'anelideo' && caracteristica === 'onivoro'){
    console.log('minhoca')
}

