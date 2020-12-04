continuar = contadorNotasValidas = soma = 0
while continuar != 2:
    if contadorNotasValidas < 2:
        nota = float(input())
        if nota > 0 and nota <= 10:
            soma += nota
            contadorNotasValidas += 1
            if contadorNotasValidas == 2:
                print(f'media = {soma/2:.2f}')

        else:
            print('nota invalida')

    else:
        continuar = int(input('novo calculo (1-sim 2-nao)\n'))
        if continuar == 1:
            soma = 0
            contadorNotasValidas = 0
