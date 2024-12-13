class Calculator {
    

    add(a, b){
        return   a + b
         
         
    }
    subtract(a, b) {
        return   a - b
         
    }
    divide(a, b) {
        return  a / b
         
    }
    multiply(a, b) {
        return  a * b         
    }
}

let calculator = new Calculator();
console.log(calculator.add(10, 2));      
console.log(calculator.subtract(10, 2)); 
console.log(calculator.multiply(10, 2)); 
console.log(calculator.divide(10, 2));   



