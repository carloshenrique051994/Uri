vezesInput = 0
valoresPositivos = 0
soma = 0
for c in range(0,6,1):
    valor = float(input())
    if valor > 0:
        valoresPositivos += 1
        soma += valor
print(f'{valoresPositivos} valores positivos')
print(f'{soma/valoresPositivos:.1f}')

'''lista = list()
vezesInput = 0
while vezesInput < 6:
    valor = float(input())
    if valor > 0:
        lista.append(valor)
    vezesInput += 1
quantidadeNumeros = len(lista)
print(f'{quantidadeNumeros} valores positivos')
print(f'{sum(lista)/quantidadeNumeros:.1f}')
SÓ PARA TREINAR LISTAS
'''