import  math
valores1 = input().split(" ")
x1 = float(valores1[0])
y1 = float(valores1[1])

valores2 = input().split(" ")
x2 = float(valores2[0])
y2 = float(valores2[1])

distancia = math.sqrt(((math.pow((x2-x1), 2))+(math.pow((y2-y1), 2))))
print('{:.4f}'.format(distancia))
