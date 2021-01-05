valor = int(input())

print('{}'.format(valor))

numero100 = valor//100
print('{} nota(s) de R$ 100,00'.format(numero100))
valor -= numero100*100 #valor - valor (menos ele mesmo)

numero50 = valor//50
print('{} nota(s) de R$ 50,00'.format(numero50))
valor -= numero50*50

numero20 = valor//20
print('{} nota(s) de R$ 20,00'.format(numero20))
valor -= numero20*20

numero10 = valor//10
print('{} nota(s) de R$ 10,00'.format(numero10))
valor -= numero10*10

numero5 = valor//5
print('{} nota(s) de R$ 5,00'.format(numero5))
valor -= numero5*5

numero2 = valor//2
print('{} nota(s) de R$ 2,00'.format(numero2))
valor -= numero2*2

numero1 = valor//1
print('{} nota(s) de R$ 1,00'.format(numero1))
