contador = soma =  0
casos = int(input())
while contador < casos:
    valores = str(input()).split()
    x = int(valores[0])
    y = int(valores[1])
    if x > y:
        maior = x
        menor = y
    else:
        maior = y
        menor = x
    for contador2  in range(menor+1, maior, 1):
        if contador2 % 2 != 0:
            soma += contador2
    print(f'{soma}')
    soma = 0
    contador += 1

