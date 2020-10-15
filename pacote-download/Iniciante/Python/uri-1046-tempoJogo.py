valores = str(input())
horas = valores.split()
horaInicial = int(horas[0])
horaFinal = int(horas[1])
if horaInicial > horaFinal:
    print(f'O JOGO DUROU {24-(horaInicial - horaFinal)} HORA(S)')
elif horaInicial < horaFinal:
    print(f'O JOGO DUROU {horaFinal-horaInicial} HORA(S)')
else:
    print(f'O JOGO DUROU 24 HORA(S)')