valor1 = int(input())
valor2 = int(input())
total = 0

maior = valor1
menor = valor2

if valor2 > valor1:
    maior = valor2
    menor = valor1

for contador in range(menor+1, maior):
    if contador % 2 != 0:
        total += contador

print(total)
