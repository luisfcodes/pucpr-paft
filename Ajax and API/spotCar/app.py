from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///cars.db"
db.init_app(app)

class Cars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String, nullable=False)
    model = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    note = db.Column(db.String)
    price = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)
    imageName = db.Column(db.String, nullable=False)
    attributes = db.Column(db.PickleType(), nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

with app.app_context():
  db.create_all()

e1 = Cars(brand='Chevrolet',
  model='Onix Plus',
  year=2022,
  note='',
  price='1200,00',
  status='Disponível',
  imageName='onix-plus.png',
  attributes=  [{'seats': 5}, {'doors': 4}, {'air': 'Ar condicionado'}, {'gear': 'Manual'}, {'engine': '1.0'}, {'trunk': '1 - 2 malas'}]
)

# with app.app_context():
#   db.session.add(e1)
#   db.session.commit()

@app.route("/cars")
def contact_list():
    cars = db.session.execute(db.select(Cars).order_by(Cars.id)).scalars()
    return jsonify([car.as_dict() for car in cars])



# @app.route("/contacts", methods=['POST'])
# def addNewContact():
  
#   data = request.get_json()

#   user = Contacts(
#       name=data["name"],
#       phone=data["phone"],
#   )
#   db.session.add(user)
#   db.session.commit()
#   contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
#   return jsonify([contact.as_dict() for contact in contacts])

# @app.route("/contacts/<int:id>", methods=['DELETE'])
# def deleteContact(id):

#   user = db.get_or_404(Contacts, id)

#   db.session.delete(user)
#   db.session.commit()

#   contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
#   return jsonify([contact.as_dict() for contact in contacts])

# @app.route("/contacts/<int:id>", methods=['PUT'])
# def updateContact(id):

#   data = request.get_json()
#   user = db.get_or_404(Contacts, id)
  
#   user.name = data['name']
#   user.phone = data['number']

#   user.verified = True
#   db.session.commit()

#   contacts = db.session.execute(db.select(Contacts).order_by(Contacts.id)).scalars()
#   return jsonify([contact.as_dict() for contact in contacts])