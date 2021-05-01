contadorEmpate = contadorGremio = contadorInter = contadorGrenais = 0
continuar = 1
while continuar == 1:
    inter, gremio = input().split(" ")
    inter, gremio = int(inter), int(gremio)

    continuar = int(input('Novo grenal (1-sim 2-nao)\n'))

    contadorGrenais += 1

    if inter > gremio:
        contadorInter += 1
    elif inter < gremio:
        contadorGremio += 1
    elif inter == gremio:
        contadorEmpate += 1

print(f'{contadorGrenais} grenais\nInter:{contadorInter}\nGremio:{contadorGremio}\nEmpates:{contadorEmpate}')

if contadorInter > contadorGremio:
    print('Inter venceu mais')
else:
    print('Gremio venceu mais')
