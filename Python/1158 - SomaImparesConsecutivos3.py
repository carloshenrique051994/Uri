contador = soma = 0
vezes = int(input())
for c in range(0, vezes):
    valor1, valor2 = input().split(' ')
    valor1, valor2 = int(valor1), int(valor2)
    while contador < valor2:
        if valor1 % 2 != 0:
            soma += valor1
            contador += 1
            valor1 += 1
        else:
            valor1 += 1
    print(f'{soma}')
    contador = soma = 0