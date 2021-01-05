var input = require('fs').readFileSync('JavaScript/stdin', 'utf8');
var lines = input.split('\n')



while (true) {
    var tentativas = lines.shift()
    if(tentativas == 2002){
        console.log('Acesso Permitido')
        break
    }else{
        console.log('Senha Invalida ')
    }
}

