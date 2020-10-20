from math import pow

pi = 3.14159
raio = int(input())
volume = (4.0/3) * pi * (pow(raio, 3))
print('VOLUME = {:.3f}'.format(volume))