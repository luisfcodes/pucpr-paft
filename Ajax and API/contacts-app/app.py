from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

contacts = [
  {
    'id': 1,
    'name': 'Luis Fernando',
    'number': 41997371886
  },
  {
    'id': 2,
    'name': 'Caio Henrique',
    'number': 41987895676
  },
  {
    'id': 3,
    'name': 'Douglas Campos',
    'number': 41956678907
  },
]

@app.route("/contacts", methods=['GET'])
def getAllContacts():
    
  return contacts

@app.route("/contacts", methods=['POST'])
def addNewContact():

  data = request.get_json()

  contacts.append({
    'id': len(contacts) + 1,
    'name': data['name'],
    'number': data['number']
  })

  return contacts

@app.route("/contacts/<int:id>", methods=['DELETE'])
def deleteContact(id):

  for index, contact in enumerate(contacts):
    if contact['id'] == id:
      contacts.pop(index)

  return contacts

@app.route("/contacts/<int:id>", methods=['PUT'])
def updateContact(id):

  data = request.get_json()

  for index, contact in enumerate(contacts):
    if contact['id'] == id:
      contact['name'] = data['name']
      contact['number'] = data['number']

  return contacts