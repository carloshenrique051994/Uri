continuar = 's'
menor = maior = contadorPessoa = 0
lista = []
dados = []
while continuar != 'n':
    dados.append(str(input('Nome: ')))
    dados.append(float(input('Peso: ')))
    lista.append(dados[:])
    
    continuar = str(input('Quer continuar? [s/n]\n')).lower()
    if continuar == 's':
        contadorPessoa += 1
    
    dados.clear()
    
for p in lista:
    menor = maior = lista[p][p]
    if l
    
print(f'Total de pessoas: {contadorPessoa} pessoa(s)')