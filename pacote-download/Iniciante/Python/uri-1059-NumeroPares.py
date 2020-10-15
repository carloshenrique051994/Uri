contador = 1
while contador <= 100:
    par = contador % 2
    if par == 0:
        par = contador
        print(par)
    contador += 1