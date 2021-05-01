lista = []
for i in range(0, 10, 1):
    valor = int(input())
    if valor > 0:
        lista.append(valor)
    else:
        lista.append(1)
    print(f'X[{i}] = {lista[i]}')
