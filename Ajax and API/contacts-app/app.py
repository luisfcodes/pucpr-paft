from flask import Flask, request, jsonify
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
  contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
  return jsonify([contact.as_dict() for contact in contacts])

@app.route("/contacts/<int:id>", methods=['DELETE'])
def deleteContact(id):

  user = db.get_or_404(Contacts, id)

  db.session.delete(user)
  db.session.commit()

  contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
  return jsonify([contact.as_dict() for contact in contacts])

@app.route("/contacts/<int:id>", methods=['PUT'])
def updateContact(id):

  data = request.get_json()
  user = db.get_or_404(Contacts, id)
  
  user.name = data['name']
  user.phone = data['number']

  user.verified = True
  db.session.commit()

  contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
  return jsonify([contact.as_dict() for contact in contacts])