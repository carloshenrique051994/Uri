contador2 =  7
for contador in range(1, 10, 2):
    print(f'I={contador} J={contador2}')
    print(f'I={contador} J={contador2 - 1}')
    print(f'I={contador} J={contador2 - 2}')
    contador2 += 2