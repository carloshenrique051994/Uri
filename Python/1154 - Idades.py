contador = total = 0
while True:
    idades = int(input())
    if idades > 0:
        total += idades
        contador += 1
    else:
        break
print(f'{total/contador:.2f}')
