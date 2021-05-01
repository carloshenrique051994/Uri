contadorNotasValidas = soma = 0
while contadorNotasValidas < 2:
    notas = float(input())
    if notas > 0 and notas <= 10:
        soma += notas
        contadorNotasValidas += 1
    else:
        print('nota invalida')
print(f'media = {(soma/2):.2f}')