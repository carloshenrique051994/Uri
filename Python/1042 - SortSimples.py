lista = input().split(" ")
valor1 = int(lista[0])
valor2 = int(lista[1])
valor3 = int(lista[2])
if valor1 < valor2 and valor1 < valor3:
    print(valor1)
    if valor2 < valor3:
        print(f'{valor2}\n{valor3}')
    else:
        print(f'{valor3}\n{valor2}')
elif valor2 < valor3:
    print(valor2)
    if valor1 < valor3:
        print(f'{valor1}\n{valor3}')
    else:
        print(f'{valor3}\n{valor1}')
else:
    print(valor3)
    if valor1 < valor2:
        print(f'{valor1}\n{valor2}')

    else:
        print(f'{valor2}\n{valor1}')

print(f'\n{valor1}')
print(valor2)
print(valor3)
