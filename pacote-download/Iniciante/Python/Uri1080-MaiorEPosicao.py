lista = list()
for contador in range(0, 100, 1):
    numeros = int(input())
    lista.append(numeros)
maior = max(lista)
print(f'{maior}\n{lista.index(maior)+1}')
