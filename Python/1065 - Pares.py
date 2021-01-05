lista = list()
pares = 0
for c in range(0, 5, 1):
    valor = float(input())
    if valor % 2 == 0:
        pares += 1
print(f'{pares} valores pares')
