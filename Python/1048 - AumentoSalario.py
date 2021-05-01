salario = float(input())
if salario <= 400.00:
    aumento = salario*0.15
    percentual = 15

elif salario >= 400.01 and salario <= 800.00:
    aumento = salario*0.12
    percentual = 12

elif salario >= 800.01 and salario <= 1200.00:
    aumento = salario*0.10
    percentual = 10

elif salario >= 1200.01 and salario <= 2000.00:
    aumento = salario*0.07
    percentual = 7

else:
    aumento = salario*0.04
    percentual = 4

print(f'Novo salario: {salario+aumento:.2f}\nReajuste ganho: {aumento:.2f}\nEm percentual: {percentual} %')
