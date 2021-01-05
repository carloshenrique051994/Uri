var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')

var contadorInter = contadorGremio = contadorGrenais = contadorEmpates = 0
var continuar = 1

while(true){
    if(continuar == 1){
        var grenais = lines.shift().split(" ")
        var inter = Number(grenais[0])
        var gremio = Number(grenais[1])

        var continuar = Number(lines.shift())
        console.log('Novo grenal (1-sim 2-nao)')

        if(inter > gremio){
            contadorInter +=  1
        }if(inter < gremio){
            contadorGremio +=  1
        }if(inter == gremio){
            contadorEmpates +=  1
        }
        contadorGrenais +=  1

    }else{
        break
    }
}
if(contadorInter > contadorGremio){
    vencedor = 'Inter'
}else{
    vencedor = 'Gremio'
}
console.log(`${contadorGrenais} grenais\nInter:${contadorInter}\nGremio:${contadorGremio}\nEmpates:${contadorEmpates}\n${vencedor} venceu mais`)

