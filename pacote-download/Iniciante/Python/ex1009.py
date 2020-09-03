nome = str(input())
salarioVendedor = float(input())
vendasVendedor = float(input())
comissaoVendedor = vendasVendedor*0.15

print('TOTAL = R$ {:.2f}'.format(salarioVendedor+comissaoVendedor))
