contadorAlcool = contadorGasolina = contadorDiesel = 0
while(True):
    tipoCombustivel = int(input())
    if tipoCombustivel == 1:
        contadorAlcool += 1
    elif tipoCombustivel == 2:
        contadorGasolina += 1
    elif tipoCombustivel == 3:
        contadorDiesel += 1
    elif tipoCombustivel == 4:
        break
print(
    f'MUITO OBRIGADO\nAlcool: {contadorAlcool}\nGasolina: {contadorGasolina}')
print(f'Diesel: {contadorDiesel}')
