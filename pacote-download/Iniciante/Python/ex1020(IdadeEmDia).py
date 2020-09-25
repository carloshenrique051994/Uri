idadeEmDias = int(input())

anos = idadeEmDias // 365
print('{} ano(s)'.format(anos))
idadeEmDias -= anos * 365

meses = idadeEmDias // 30
print('{} mes(es)'.format(meses))
idadeEmDias -= meses * 30

print('{} dia(s)'.format(idadeEmDias))