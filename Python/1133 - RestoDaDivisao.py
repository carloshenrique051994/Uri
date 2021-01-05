x = int(input())
y = int(input())

if x > y:
    for contador in range(y+1, x, 1):
        if contador % 5 == 2 or contador % 5 == 3:
            print(contador)
else:
    for contador in range(x+1, y, 1):
        if contador % 5 == 2 or contador % 5 == 3:
            print(contador)