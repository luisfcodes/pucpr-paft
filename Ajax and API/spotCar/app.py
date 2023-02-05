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
    price = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)
    imageName = db.Column(db.String, nullable=False)
    attributes = db.Column(db.JSON, nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    reservations = db.Column(db.JSON, nullable=False)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}    

with app.app_context():
  db.create_all()

# e1 = Cars(brand='Chevrolet',
#   model='Onix Plus',
#   year=2022,
#   price='110,00',
#   status='Disponível',
#   imageName='onix-plus.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Manual', 'engine': '1.0', 'trunk': '1 - 2 Malas'}
# )

# e2 = Cars(brand='Fiat',
#   model='Mobi',
#   year=2020,
#   price='82,48',
#   status='Disponível',
#   imageName='mobi.png',
#   attributes={'seats': 4, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Manual', 'engine': '1.0', 'trunk': '1 Mala'}
# )

# e3 = Cars(brand='Peugeot',
#   model='2008',
#   year=2022,
#   price='160,20',
#   status='Disponível',
#   imageName='peugeot-2008.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Automático', 'engine': '1.6', 'trunk': '2 Malas'}
# )

# e4 = Cars(brand='Toyota',
#   model='Corolla',
#   year=2022,
#   price='250,00',
#   status='Disponível',
#   imageName='corolla-2022.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Automático', 'engine': '1.4', 'trunk': '2 Malas'}
# )

# e4 = Cars(brand='Renault',
#   model='Logan',
#   year=2021,
#   price='104,25',
#   status='Disponível',
#   imageName='logan.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Manual', 'engine': '1.0', 'trunk': '1 - 2 Malas'}
# )

# e5 = Cars(brand='Fiat',
#   model='Cronos',
#   year=2022,
#   price='108,52',
#   status='Disponível',
#   imageName='cronos.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Manual', 'engine': '1.6', 'trunk': '1 - 2 Malas'}
# )

# e6 = Cars(brand='Jeep',
#   model='Compass',
#   year=2022,
#   price='380,22',
#   status='Disponível',
#   imageName='compass.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Automático', 'engine': '2.0', 'trunk': '1 - 3 Malas'}
# )

# e7 = Cars(brand='Fiat',
#   model='Toro',
#   year=2021,
#   price='306,99',
#   status='Disponível',
#   imageName='toro.png',
#   attributes={'seats': 5, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Automático', 'engine': '1.8', 'trunk': '0 Malas'}
# )

# e8 = Cars(brand='Chevrolet',
#   model='Spin',
#   year=2020,
#   price='306,99',
#   status='Disponível',
#   imageName='spin.png',
#   attributes={'seats': 7, 'doors': 4, 'air': 'Ar condicionado', 'gear': 'Manual', 'engine': '1.8', 'trunk': '2 Malas'}
# )

# e9 = Users(
#   username='user',
#   name='Luis Fernando da Silva',
#   reservations={},
# )

# with app.app_context():
#   db.session.add(e1)
#   db.session.add(e2)
#   db.session.add(e3)
#   db.session.add(e4)
#   db.session.add(e5)
#   db.session.add(e6)
#   db.session.add(e7)
#   db.session.add(e8)
#   db.session.add(e9)
#   db.session.commit()

@app.route("/cars")
def cars_list():
    cars = db.session.execute(db.select(Cars).order_by(Cars.id)).scalars()
    return jsonify([car.as_dict() for car in cars])

@app.route("/users/")
def users_list():
    users = db.session.execute(db.select(Users).order_by(Users.id)).scalars()
    return jsonify([user.as_dict() for user in users])

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