contador2 = 7
for(contador=1;contador<10;contador += 2){
    console.log(`I=${contador} J=${contador2}`)
    console.log(`I=${contador} J=${contador2 - 1}`)
    console.log(`I=${contador} J=${contador2 - 2}`)
    contador2 += 2
}