notas = input().split(" ")
n1 = float(notas[0])
n2 = float(notas[1])
n3 = float(notas[2])
n4 = float(notas[3])

media = ((n1*2)+(n2*3)+(n3*4)+(n4*1))/10
print(f'Media: {media:.1f}')
if media >= 7.0:
    print('Aluno aprovado.')
elif media < 5.0:
    print('Aluno reprovado.')
elif media >= 5.0 and media <= 6.9:
    print('Aluno em exame.')
    notaExame = float(input())
    print(f'Nota do exame: {notaExame:.1f}')
    media = (media + notaExame)/2
    if media >= 5.0:
        print('Aluno aprovado.')
    else:
        print('Aluno reprovado.')
    print(f'Media Final: {media:.1f}')

