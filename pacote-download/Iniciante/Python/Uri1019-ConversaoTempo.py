tempo = int(input())
hora = tempo // 3600
tempo -= hora*3600

minutos = tempo // 60
tempo -= minutos*60

print('{}:{}:{}'.format(hora, minutos,tempo))