
   
  /*  function foo() {
        
        let count = 0;
        return function() {
            count  
            return count
         }
     }*/
        
function foo(a) {
    let count = 0;    
    return function(b) {
       count = a + b + count
       return count
    }
}

let sum = foo(0);

console.log(sum(4))
console.log(sum(6))
console.log(sum(10))
console.log(sum(7))
console.log(sum(100))


