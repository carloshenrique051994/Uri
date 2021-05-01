valor = int(input())
lista = [valor]
for i in range(0, 10):
    ultimo =  lista[i] + lista[-1]
    lista.append(ultimo)
    print(f'N[{i}] = {lista[i]}')