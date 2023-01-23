from flask import Flask
from flask_cors import CORS
from datetime import datetime
from dateutil import relativedelta
import math

app = Flask(__name__)
CORS(app)

@app.route("/date/<string:primaryDate>/<string:secondaryDate>")
def calcDateInterval(primaryDate, secondaryDate):
    date_format = "%Y-%m-%d"
    a = datetime.strptime(primaryDate, date_format)
    b = datetime.strptime(secondaryDate, date_format)
    calcDate = b - a

    return {
        'days': calcDate.days,
        'weeks': math.floor(calcDate.days / 7),
        'months': relativedelta.relativedelta(b,a).months
    }

@app.route("/numbers/<string:numbers>")
def calcNumbers(numbers):

    numbersListStr = numbers.split(";")
    numbersListInt = list(map(int, numbersListStr))
    even = filter(lambda p: p % 2 == 0, numbersListInt)

    return {
        'ascending': sorted(numbersListInt),
        'descending': sorted(numbersListInt, reverse=True),
        'evenList': list(even)
    }