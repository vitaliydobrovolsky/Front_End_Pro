class Calculator {
    constructor() {
    this.result = 0;
      }

    add(a, b){
        return  this.result = a + b
         
         
    }
    subtract(a, b) {
        return this.result = a - b
         
    }
    divide(a, b) {
        return this.result = a / b
         
    }
    multiply(a, b) {
        return this.result = a * b         
    }
}

let calculator = new Calculator();
console.log(calculator.add(10, 2));      
console.log(calculator.subtract(10, 2)); 
console.log(calculator.multiply(10, 2)); 
console.log(calculator.divide(10, 2));   



