from flask import Flask, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/user')
def getUser():
    username = request.args.get('username')
    responseGithub = requests.get(
        'https://api.github.com/users/'+username)
    jsonGithub = responseGithub.json()

    response = jsonGithub
    return response

@app.route('/userData')
def getUserData():
    responsePokeAPI = requests.get(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    jsonPokeAPI = responsePokeAPI.json()

    responseRickAndMortyAPI = requests.get(
        'https://rickandmortyapi.com/api/character/?page=1')
    jsonRickAndMortyAPI = responseRickAndMortyAPI.json()

    response = {'pokedex': jsonPokeAPI, 'rickAndMorty': jsonRickAndMortyAPI}
    return response



app.run(debug=True)