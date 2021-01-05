lista = list()
while True:
    valor1, valor2 = input().split(" ")
    valor1, valor2 = int(valor1), int(valor2)
    if valor1 > valor2:
        lista.append('Decrescente')
    elif valor1 < valor2:
        lista.append('Crescente')
    elif valor1 == valor2:
        break
for contador in range(len(lista)):
    print(lista[contador])