/*const arr = [1, 5, 10, 5, 7, 9, 12, 9]

let number = +prompt(`PLease add any digit`)
let arr2 = '';
let arr3 = '';

function addToArray(arr, number) {
    for(i=0; i < arr.length; i++) {
    if(arr[i] === number) {
        arr2 = arr     
    } else {
        arr.push([number]);
        arr2 = arr
    } break;

    
}
alert(arr2)
}
addToArray(arr, number)*/




/*function code(n) {
    let code1 = '';
      for (let i = 0; i < n; i++) {
        code1 += Math.floor(Math.random() * 10);
      }
      return code1;
    }
    console.log(code(10));*/



/*const arr = [1, 5, 10, 5, 7, 9, 12, 9]
function sum(array) {
    let result = 0;
      for (let i = 0; i < arr.length; i++) {
        result += arr[i];
      }
      return result;
    }
    console.log(sum(arr));*/


   /* const arr = [1, 5, 10, 5, 7, 9, 12, 9]

    const result = arr.reduce(function (prev, current) {
        console.log({prev, current})
        return prev + current
    })

    console.log(result)*/

    
    function myCounter() {
        let count = 0;
        return function() {
            count ++
            return count
        }
    }
    let value = myCounter() 
    console.log(value());
    console.log(value());
    console.log(value());
    console.log(value());
    console.log(value());
    console.log(value());
    
    
    
    
