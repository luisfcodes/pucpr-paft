import random

def sceneSelection(age):
  if age < 30:
    return scene1[0]
  elif age < 50:
    return scene1[1]
  else:
    return scene1[2]

name = input("Digite o nome que deseja dar ao personagem ")
print()
age = random.randint(18,70)

villains = ['dragão', 'lobo', 'tigre']
villain = villains[random.randint(0,2)]

characters = ['ursos', 'coelhos', 'porcos']
character = characters[random.randint(0,2)]

collectionOfHobbies = [
  'correr atrás de borboletas,', 
  ' ir ao\nlago que ficava próximo a sua casa,', 
  ' escutar histórias de terror que seu avô lhe contava,', 
  f' observar o trabalho das formigas ({name}\nficava admirado como elas trabalhavam bem em equipe)'
]

hobbies = ''

for hobbie in collectionOfHobbies:
  hobbies += hobbie

scene1 = [
  f'era um {character[:-1]} jovem de apenas {age} anos, e por sinal muito curioso', 
  f'nesta época já estava com seus {age} anos, mas adorava brincadeiras com o pessoal', 
  f'apesar de já estar com {age} anos, ainda tinha um espírito de um {character[:-1]} jovem, sempre curioso'
]

updatedScene1 = sceneSelection(age)

scene2 = [
  f'- POR FAVOR, NÂO ME MATE!!!\n',
  f'- SOCORRO, NÂO QUERO MORRER!!!\n'
]

scene3 = f"""Apesar da incerteza se todos os outros {character} acreditariam na sua história, decidiu contar e, como era de se esperar, ninguém acreditou no que o
{name} havia acabado de contar, mas isto estava longe de abala-lo, pois este dia foi único.\n"""

##### História #####

print(f"O {villain} violeta\n")

print(f"""Era uma vez uma floresta enorme e muito antiga, onde moravam muitos animais, e todos viviam
satisfeitos. Tinham tudo aquilo de que precisavam e não eram incomodados pelos homens, pois estes ainda não
tinham descoberto esta floresta. Só evitavam a parte norte da floresta. Segundo uma antiga lenda, havia aí
um terrível {villain} cor-de-violeta que comia tudo o que lhe aparecia à frente. Nunca nenhum dos animais vira o {villain}
violeta, mas mesmo assim, não se aventuravam a ir à parte norte.\n""")

print(f"""Na floresta viviam também muitos {character} com os seus filhotes. Um desses {character} era o {name}. {name} era mais
pequeno do que os outros {character} da sua idade, {updatedScene1}. 
Não conseguia correr tão depressa como os seus companheiros de jogo, na luta perdia sempre e, quando saiam para procurar alimento, era 
sempre o último. Por isso, muitas vezes, os outros {character}, não queriam deixá-lo brincar. E, ainda por cima, riam-se dele. \n""")

print(f"""{name} era mais fraco do que os outros, é verdade, mas era muito corajoso.\n""")

print(f"""Por conta de ser sempre deixado de lado nas brincadeiras, {name} tinha vários hobbies que gostava de fazer sozinho, alguns não eram
lá tão interessantes, no entanto, outros eram seus preferidos, por exemplo, {hobbies}, entre outros.\n""") 

print(f"""Quando, certo dia, os {character} voltaram a não querer deixá-lo brincar com eles, saiu dali em direção ao norte, onde morava 
o {villain} violeta. Mas o {character[:-1]} nem estava a pensar no {villain}. Após ter corrido muito, {name} foi parar a uma bela clareira. Sentou-se em
cima de uma pedra e pôs-se a refletir na injustiça dos seus companheiros. De repente, ouviu-se um leve estalar no meio das 
árvores e a cabeça do {villain} violeta apareceu através delas. O {character[:-1]} apanhou um valente susto ao ver o enorme animal,
sua primeira reação foi gritar:

{random.randint(3,5) * scene2[random.randint(0,1)]}

Mas o {villain} violeta tinha uma cara tão amorosa, que {name} perdeu o medo por completo. Ficaram a olhar um para o outro durante um bocado.
{name} percebeu que o {villain} também se sentia só. Ergueu-se e tocou na ponta do nariz do {villain}, que fungou baixinho e sorriu. 
Em seguida, o {villain} recuou e desapareceu por entre as árvores.\n""")

print(f"""O {character[:-1]} regressou a casa feliz. Será que devia contar aos amigos o encontro que tivera com o {villain}? O mais certo era não 
acreditarem numa única palavra…\n""")

if random.randint(0,1) == 1:
  print(scene3)

print(f"""“Amanhã volto outra vez à clareira”, pensou {name}. “Será que o {villain} violeta vai aparecer?”\n""")

print(f"Só de pensar no encontro, {name} já sorria!")