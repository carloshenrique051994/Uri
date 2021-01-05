soma = 0
x = int(input())
y = int(input())

menor = maior = x

if y > x:
    maior = y

while menor <= maior:
    if menor % 13 != 0:
        soma += menor
    menor += 1
print(f'{soma}')
