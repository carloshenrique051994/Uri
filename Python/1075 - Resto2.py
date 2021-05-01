valor = int(input())
contador = 1

while contador < 10000:
    if contador % valor == 2:
        print(contador)
    contador += 1
