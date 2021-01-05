valor = int(input())
contadorBixo = contadorCoelho = contadorRato = contadorSapo = 0

for c in range(0, valor):
    experiencia = str(input())
    dividir = experiencia.split()
    quantidade = int(dividir[0])
    tipo = dividir[1]

    if quantidade > 0 and 'C' in tipo:
        contadorCoelho += quantidade
    elif quantidade > 0 and 'R' in tipo:
        contadorRato += quantidade
    elif quantidade > 0 and 'S' in tipo:
        contadorSapo += quantidade

contadorBixo = contadorCoelho + contadorRato + contadorSapo

print(f'Total: {contadorBixo} cobaias')
print(f'Total de coelhos: {contadorCoelho}')
print(f'Total de ratos: {contadorRato}')
print(f'Total de sapos: {contadorSapo}')
print(f'Percentual de coelhos: {(contadorCoelho*100) / contadorBixo:.2f} %')
print(f'Percentual de ratos: {(contadorRato*100) / contadorBixo:.2f} %')
print(f'Percentual de sapos: {(contadorSapo*100) / contadorBixo:.2f} %')
