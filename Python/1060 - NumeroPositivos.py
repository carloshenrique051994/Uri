lista = list()
vezesInput = 0
while vezesInput < 6:
    valor = float(input())
    if valor > 0:
        lista.append(valor)
    vezesInput += 1
print(f'{len(lista)} valores positivos')