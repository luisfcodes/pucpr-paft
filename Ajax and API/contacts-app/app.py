from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///contacts.db"
db.init_app(app)

class Contacts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    phone = db.Column(db.String)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

with app.app_context():
    db.create_all()

@app.route("/contacts")
def contact_list():
    contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
    return jsonify([contact.as_dict() for contact in contacts])

@app.route("/contacts", methods=['POST'])
def addNewContact():
  
  data = request.get_json()

  user = Contacts(
      name=data["name"],
      phone=data["phone"],
  )
  db.session.add(user)
  db.session.commit()
  return 'cadastrado'

@app.route("/contacts/<int:id>", methods=['DELETE'])
def deleteContact(id):

  user = db.get_or_404(Contacts, id)

  db.session.delete(user)
  db.session.commit()

  return 'contacts'

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String, unique=True, nullable=False)
#     email = db.Column(db.String)

#     def as_dict(self):
#         return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# with app.app_context():
#     db.create_all()

# @app.route("/users")
# def user_list():
#     users = db.session.execute(db.select(User).order_by(User.username)).scalars()
#     # users = User.query.all()
#     return jsonify([user.as_dict() for user in users])

# @app.route("/users/create", methods=["GET", "POST"])
# def user_create():
#     if request.method == "POST":
#         data = request.get_json()
#         print(data)

#         user = User(
#             username=data["username"],
#             email=data["email"],
#         )
#         db.session.add(user)
#         db.session.commit()
#         return 'cadastro'

#     return 'get'

# contacts = [
#   {
#     'id': 1,
#     'name': 'Luis Fernando',
#     'number': 41997371886
#   },
#   {
#     'id': 2,
#     'name': 'Caio Henrique',
#     'number': 41987895676
#   },
#   {
#     'id': 3,
#     'name': 'Douglas Campos',
#     'number': 41956678907
#   },
# ]

# @app.route("/contacts", methods=['GET'])
# def getAllContacts():
    
#   return contacts

# @app.route("/contacts", methods=['POST'])
# def addNewContact():

#   data = request.get_json()

#   contacts.append({
#     'id': len(contacts) + 1,
#     'name': data['name'],
#     'number': data['number']
#   })

#   return contacts

# @app.route("/contacts/<int:id>", methods=['DELETE'])
# def deleteContact(id):

#   for index, contact in enumerate(contacts):
#     if contact['id'] == id:
#       contacts.pop(index)

#   return contacts

# @app.route("/contacts/<int:id>", methods=['PUT'])
# def updateContact(id):

#   data = request.get_json()

#   for index, contact in enumerate(contacts):
#     if contact['id'] == id:
#       contact['name'] = data['name']
#       contact['number'] = data['number']

#   return contacts