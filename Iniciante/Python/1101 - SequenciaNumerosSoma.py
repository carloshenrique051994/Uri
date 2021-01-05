maior = menor = soma = 0
while True:
    valores = str(input()).split()
    valor1 = int(valores[0])
    valor2 = int(valores[1])
    if valor1 > valor2:
        maior = valor1
        menor = valor2
    else:
        maior = valor2
        menor = valor1
    if maior <= 0 or menor <= 0:
        break
    for contador1 in range(menor, maior+1, 1):
        soma += contador1
        if contador1 < maior:
            print(contador1, end=' ')
        else:
            print(f'{maior} Sum={soma}')
            soma = 0