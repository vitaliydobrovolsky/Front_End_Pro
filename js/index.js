let Num = prompt(`ввести ціле число`);
let a = Num;

for (j = 2; j < 3; j++) {
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
    console.log(`${Num} is not a prime number`);
     
    }
  }
    if (a % j != 0 && a % 3 != 0)  {
    console.log(`${Num} is a prime number`);
    
    } break;

}


/*let i = 1;
while(i >= wholeNum) {
    if(wholeNum % (i++) === 0)
    console.log(`Complicated`)
    i++
}*/

/*for(i=2; i<=wholeNum; i++){
    if(wholeNum % i !== 0){
    console.log(" Prime ")
    }
     else{
        console.log("not prime")
       } 
         
}*/
  