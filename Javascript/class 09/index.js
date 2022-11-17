// <------ activity one and two ------>
const circle = {
  radius: 3,
  calcAreaOfCircle: function() {
    return (3.1415926535898 * this.radius * this.radius).toFixed(2)
  },
  calcPerimeterOfCircle: function() {
    return (2 * 3.1415926535898 * this.radius).toFixed(2)
  }
}

console.log("<-- Activity one and two -->")
console.log(circle.calcAreaOfCircle())
console.log(circle.calcPerimeterOfCircle())

// <------ activity three and four ------>

function circleFunction(radius){
  this.radius = radius;
}
circleFunction.prototype.calcAreaOfCircle = function() {
  return (3.1415926535898 * this.radius * this.radius).toFixed(2)
}

circleFunction.prototype.calcPerimeterOfCircle = function() {
  return (2 * 3.1415926535898 * this.radius).toFixed(2)
}

const circleOne = new circleFunction(4)
const circleTwo = new circleFunction(6)
console.log("\n<-- Activity three and four -->")
console.log(`Circle One(${circleOne.radius}): ${circleOne.calcAreaOfCircle()} - ${circleOne.calcPerimeterOfCircle()}`)
console.log(`Circle Two(${circleTwo.radius}): ${circleTwo.calcAreaOfCircle()} - ${circleTwo.calcPerimeterOfCircle()}`)

// <------ activity five, six, seven, eight, nine and ten ------>

class circleClass {
  #radius;
  constructor(radius){
    this.changeSignOfRadius = radius
  }

  get radius(){
    return this.#radius
  }

  get AreaOfCircle(){
    return (3.1415926535898 * this.#radius * this.#radius).toFixed(2)
  }

  get PerimeterOfCircle(){
    return (2 * 3.1415926535898 * this.#radius).toFixed(2)
  }

  set changeSignOfRadius(value){
    if(value < 0) {
      this.#radius = value * -1
    } else {
      this.#radius = value
    }
  }

  static createNewCircles(list){
    let newCircles = []
    try {
      list.map(element => {
        if(!isNaN(element)){
          newCircles.push(new circleClass(element))
        }
      })
    } catch {
      return 'Insira uma lista válida!'
    }

    return newCircles
  }
}

const circleOfClass = new circleClass(-3)

console.log("\n<-- Activity five, six, seven and eight -->")
console.log(circleOfClass.AreaOfCircle)
console.log(circleOfClass.PerimeterOfCircle)

circleClass.prototype.toString = function(){
  return `Circulo de raio ${this.radius}`
}

console.log(circleOfClass.toString())

console.log(circleClass.createNewCircles([1, 'a', 8, 6, 23, '$']))