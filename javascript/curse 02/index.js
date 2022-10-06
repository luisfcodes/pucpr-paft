//first activity

const myArray = [1, 5, 6, 10, -1, 5, 25, 35, 65]
const newArrayPositiveNumbers = myArray.filter(element => element > 0)
const sum = newArrayPositiveNumbers.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(newArrayPositiveNumbers)
console.log(sum / newArrayPositiveNumbers.length)

// second activity

