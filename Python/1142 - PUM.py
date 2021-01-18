contadorNumeros = contadorLinhas = 0
numero = 1

valor = int(input())
while contadorLinhas < valor:
    if contadorNumeros < 3:
        print(f'{numero}', end=' ')
        contadorNumeros += 1
        numero += 1
    else:
        print('PUM')
        numero += 1
        contadorNumeros = 0
        contadorLinhas += 1
