valor = int(input())
contador = 1
while contador < 7:
    if valor % 2 != 0:
        contador += 1
        print(valor)
    valor += 1
