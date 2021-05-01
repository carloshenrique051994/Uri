valor = int(input())
for contador in range(1, valor+1, 1):
    print(f'{contador} {contador*contador} {contador*contador*contador}')

    print(f'{contador} {(contador*contador)+1} {(contador*contador*contador+1)}')
