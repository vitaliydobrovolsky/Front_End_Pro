let num = prompt("Write here any number with digits")
let x = num[0];
let y = num[1];
let z = num[2];
let result1 = x === y && x === z && z === y;
let message1 = `Чи правда, що всі цифри однакові? - ${result1}`;
alert(message1);

let result2 = x === y || x === z || z === y;
let message2 = `Чи є серед цифр цифри однакові? - ${result2}`;
alert(message2);