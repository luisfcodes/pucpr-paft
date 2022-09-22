# Calculadora String
# Crie uma calculadora simples que receba uma String e retorne um inteiro
# O intuito foi solucionar sem a utlização de expressões regulares

def add(string):

    result = 0 #Armazenará o resultado final 
    delimiter = "" #Irá receber o delimitador 
    negativeNumbers = [] #Armazenará números negativos 
    errorMessages = [] #Armazenará as mensagens de erros

    #Valida argumentos vazios
    if len(string) < 1:
        return 0

    #Valida se o argumento tem um caracter que não seja número no final
    try:
        int(string[len(string) - 1])
    except:
        errorMessages.append('Entrada Inválida!')

    # Verifica se há números negativos na string e adicioná-os no array 'negativeNumbers' 
    for x in range(len(string)):
        if string[x] == '-':
            try:
                negativeNumbers.append(int(string[x:x+2]))
            except:
                False
    
    # Valida se há número negativos na lista, caso haja, cria a mensagem de erro e insere a mesma na lista de mensagens
    if len(negativeNumbers) > 0:
        negativeNumbersString = (",".join(str(x) for x in negativeNumbers))
        errorMessages.append(f"Número(s) negativo(s) não permitidos: {negativeNumbersString}")

    #Verifica se o tamanho do argumento é maior que quatro (mínimo para aplicar novo delimitador)
    #Cria uma variável que irá armazenar o novo delimitador
    #Cria uma varíavel a partir do argumento, retirando o parte que define o novo delimitador
    #Faz a iteração pela nova variavel (newString) somando os valores há variável de resultado (result)
    #Caso encontre um delimitador deiferente do definido, cria a mensagem de erro e insere a mesma na lista de mensagens
    if len(string) > 4:
        if string[0:4] == f"//{string[2]}\n":
            delimiter = string[2]
            newString = string[4:]
            for index, y  in enumerate(newString):
                try:
                    number = int(y)
                    result = result + number
                except:
                    if y != delimiter and y != "-":
                        errorMessages.append(f"'{delimiter}' esperado, mas '{y}' encontrado na posição {index}.")
            if len(errorMessages) < 1:
                return result

    #Verifica se há erros encontrado até o momento, caso seja encontrado apenas um, retorna o mesmo
    #Caso haja mais de um erro, retorna todas as mensagens separadas pelo \n
    if len(errorMessages) == 1:
        return errorMessages[0]
    elif len(errorMessages) > 1:
        return "\n".join(str(message) for message in errorMessages)

    number = '' #Armazenará um número temporariamente, caso o mesmo possuir mais de um algarismo (ex: 10)
    
    #Itera sobre toda string, validando os números e caracteres especiais, como delimitadores, além de descartar números maiores que 1000
    for index, x in enumerate(string):
        try:
            int(x)
            if index == len(string) -1:
                number += x
                if int(number) < 1000:
                    result = result + int(number)
                return result
            try:
                int(string[index + 1])
                number += x
            except:
                number += x
                result = result + int(number)                
        except:
            number = ''
            False