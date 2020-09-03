from math import pow
pi = 3.14159
valores = input().split(" ")
a, b, c = valores
a = float(a)
b = float(b)
c = float(c)
areaTriangulo = (a*c)/2
areaCirculo = (c*c)*pi
areaTrapezio = ((a + b)*c)/2
areaQuadrado = b*b
areaRetangulo = a*b
print('TRIANGULO: {:.3f}\nCIRCULO: {:.3f}\nTRAPEZIO: {:.3f}\nQUADRADO: {:.3f}\nRETANGULO: {:.3f}'.format(areaTriangulo, areaCirculo, areaTrapezio, areaQuadrado,areaRetangulo))
