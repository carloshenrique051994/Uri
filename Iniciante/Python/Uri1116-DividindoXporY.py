vezes = int(input())
for contador in range(0, vezes):
    x, y = input().split(" ")
    try:
        resultado = int(x)/int(y)
        print(f'{resultado:.1f}')
    except ZeroDivisionError:
        print('divisao impossivel')
