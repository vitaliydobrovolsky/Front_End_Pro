function multiply(a) {
    return function(b) {
        return a * b
    }
}


console.log(multiply(5)(2))
console.log(multiply(10)(2))
console.log(multiply(11)(2))
console.log(multiply(7)(2))
console.log(multiply(8)(2))