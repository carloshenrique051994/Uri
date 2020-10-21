valor = int(input())
contador = 0
dentro = 0
fora = 0

while contador < valor:
    valores = int(input())
    if valores >= 10 and valores <= 20:
        dentro += 1
    else:
        fora += 1
    contador += 1
print(f'{dentro} in\n{fora} out')
