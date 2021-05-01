pares = impares = positivos = negativos = 0

for c in range(0, 5, 1):
    valor = float(input())
    if valor % 2 == 0:
        pares += 1
    else:
        impares += 1
    if valor > 0:
        positivos += 1
    if valor < 0:
        negativos += 1
print(f'{pares} valor(es) par(es)\n{impares} valor(es) impar(es)')
print(f'{positivos} valor (es)positivo(s)\n{negativos} valor(es) negativo(s)')
