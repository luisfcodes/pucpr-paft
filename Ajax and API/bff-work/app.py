from flask import Flask, request, render_template
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/user')
def getUser():
    try:
        username = request.args.get('username')
        responseGithub = requests.get('https://api.github.com/users/'+username)
        jsonGithub = responseGithub.json()

        response = jsonGithub

        return response
    except Exception as err:
        return err

@app.route('/userData')
def getUserData():
    try:
        responsePokeAPI = requests.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        jsonPokeAPI = responsePokeAPI.json()
    except Exception as err:
        return err
    
    try:
        responseRickAndMortyAPI = requests.get('https://rickandmortyapi.com/api/character/?page=1')
        jsonRickAndMortyAPI = responseRickAndMortyAPI.json()
    except Exception as err:
        return err

    response = {'pokedex': jsonPokeAPI, 'rickAndMorty': jsonRickAndMortyAPI}

    return response

@app.route('/user.html')
def showUserPage():
    pokemonList = []
    rickAndMortyList = []
    userGithub = getUser()
    userData = getUserData()

    for pokemon in userData['pokedex']['results']:
        pokemonData = requests.get(pokemon['url'])
        jsonPokemonData = pokemonData.json()
        pokemonList.append({
            'name': jsonPokemonData['name'],
            'imageUrl': jsonPokemonData['sprites']['other']['dream_world']['front_default']
        })

    for character in userData['rickAndMorty']['results']:
        rickAndMortyList.append({
            'name': character['name'],
            'imageUrl': character['image']
        })

    return render_template('user.html', user = {
        'user': userGithub,
        'pokedex': pokemonList,
        'rickAndMorty': rickAndMortyList,
    })
    
app.run(debug=True)