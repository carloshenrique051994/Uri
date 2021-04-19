contador = soma = 0
while(True):
    valor = int(input())
    if(valor == 0):
        break
    while contador < 5:
        if valor % 2 == 0:
            soma += valor
            contador += 1
        valor += 1
    print(f'{soma}')
    contador = soma = 0