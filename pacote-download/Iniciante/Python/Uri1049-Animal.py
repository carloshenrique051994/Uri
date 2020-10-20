vertebradoOuInvertebrado = str(input().strip().lower())
especie = str(input().strip().lower())
caracteristica = str(input().strip().lower())

#vertebrado
if vertebradoOuInvertebrado == 'vertebrado' and especie == 'ave' and caracteristica == 'carnivoro':
    print('aguia')
elif vertebradoOuInvertebrado == 'vertebrado' and especie == 'ave' and caracteristica == 'onivoro':
    print('pomba')
elif vertebradoOuInvertebrado == 'vertebrado' and especie == 'mamifero' and caracteristica == 'onivoro':
    print('homem')
elif vertebradoOuInvertebrado == 'vertebrado' and especie == 'mamifero' and caracteristica == 'herbivoro':
    print('vaca')

#invertebrado
if vertebradoOuInvertebrado == 'invertebrado' and especie == 'inseto' and caracteristica == 'hematofago':
    print('pulga')
elif vertebradoOuInvertebrado == 'invertebrado' and especie == 'inseto' and caracteristica == 'herbivoro':
    print('lagarta')
if vertebradoOuInvertebrado == 'invertebrado' and especie == 'anelideo' and caracteristica == 'hematofago':
    print('sanguessuga')
elif vertebradoOuInvertebrado == 'invertebrado' and especie == 'anelideo' and caracteristica == 'onivoro':
    print('minhoca')


