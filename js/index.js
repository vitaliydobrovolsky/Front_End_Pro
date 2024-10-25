
//while
/*let i = 0;
while ( i < 3) {
    alert(i);
    i++;
}*/


//do...while
/*let i = 0;
do {
    alert(i);
    i++;
} while ( i < 3);*/


//for
/*for (let i = 0; i < 3; i++) {
    alert(i);
}*/


//practice
/*let i = 1;
while ( i < 10) {
    alert(i*i);
    i++;
}

let i = 1;
do {
    alert(i*i);
    i++;
} while ( i < 10);

for (let i = 1; i < 10; i*i) {
    alert(i);
}*/

/*let result = 0;
for(let i = 1; i <500; i++) {
    result += i;
}
console.log(result/500)*/


/*let sum = 0;
for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        sum +=i;
    }
}
console.log(+sum)*/



//proizvedenie kratnyh 4isel
/*for (let i=100; i<=200; i++){
    if (i%3 === 0) {
        console.log(i);
    }
}*/

//tablica umnogeniya
for (let i = 2; i <= 10; i++) {

    console.log(`Таблица умножения ${i}:`);

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} x ${j} = ${i * j}`);

    }

    console.log('');  

}