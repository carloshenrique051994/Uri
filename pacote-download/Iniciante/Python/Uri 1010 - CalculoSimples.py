infosPeca1 = input().split()
infosPeca2 = input().split()
id1, qtde1, valor1 = infosPeca1
id2, qtde2, valor2 = infosPeca2
total = int(qtde1)*float(valor1) + int(qtde2)*float(valor2)
print('VALOR A PAGAR: R$ {:.2f}'.format(total))