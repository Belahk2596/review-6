let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = [];
numbers.forEach(function(number) {
    let squared = number * number;
    squaredNumbers.push(squared)
})
console.log(squaredNumbers)