valor = int(input())

for contador in range(1, valor + 1):
    notas = input().split()
    nota1, nota2, nota3 = notas
    print(f'{(float(nota1)*2 + float(nota2)*3 + float(nota3)*5)/10:.1f}')
