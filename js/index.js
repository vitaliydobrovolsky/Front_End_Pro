let num = prompt("Write here any number with digits")
let x = num[0];
let y = num[1];
let z = num[2];
let result1 = x === y && x === z && z === y;
console.log(result1);

let result2 = x === y || x === z || z === y;
console.log(result2);