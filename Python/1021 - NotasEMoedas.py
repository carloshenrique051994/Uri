valor = float(input())

#NOTAS
nota100 = valor//100
print('NOTAS:')
print('{:.0f} nota(s) de R$ 100.00'.format(nota100))
valor -= nota100 * 100

nota50 = valor//50
print('{:.0f} nota(s) de R$ 50.00'.format(nota50))
valor -= nota50 * 50

nota20 = valor//20
print('{:.0f} nota(s) de R$ 20.00'.format(nota20))
valor -= nota20 * 20

nota10 = valor//10
print('{:.0f} nota(s) de R$ 10.00'.format(nota10))
valor -= nota10 * 10

nota5 = valor//5
print('{:.0f} nota(s) de R$ 5.00'.format(nota5))
valor -= nota5 * 5

nota2 = valor//2
print('{:.0f} nota(s) de R$ 2.00'.format(nota2))
valor -= nota2 * 2

#MOEDAS
print('MOEDAS:')
moeda1 = valor//1
print('{:.0f} moeda(s) de R$ 1.00'.format(moeda1))
valor -= moeda1 * 1

moeda050 = valor//0.50
print('{:.0f} moeda(s) de R$ 0.50'.format(moeda050))
valor -= moeda050 * 0.50

moeda025 = valor//0.25
print('{:.0f} moeda(s) de R$ 0.25'.format(moeda025))
valor -= moeda025 * 0.25

moeda010 = valor//0.10
print('{:.0f} moeda(s) de R$ 0.10'.format(moeda010))
valor -= moeda010 * 0.10

moeda005 = valor//0.05
print('{:.0f} moeda(s) de R$ 0.05'.format(moeda005))
valor -= moeda005 * 0.05

moeda001 = valor//0.01
print('{:.0f} moeda(s) de R$ 0.01'.format(moeda001))
