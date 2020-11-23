valor = int(input())
lista = list()
contador = 0

while contador < valor:
    lista.append(int(input()))
    if lista[contador] % 2 == 0:
        if lista[contador] > 0:
            print('EVEN POSITIVE')
        elif lista[contador] < 0:
            print('EVEN NEGATIVE')
    elif lista[contador] % 2 != 0:
        if lista[contador] > 0:
            print('ODD POSITIVE')
        elif lista[contador] < 0:
            print('ODD NEGATIVE')
    if lista[contador] == 0:
        print('NULL')
    contador += 1
