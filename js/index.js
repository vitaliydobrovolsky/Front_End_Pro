let wholeNum = prompt(`ввести ціле число`);
/*for(let i = wholeNum; i >= wholeNum;) {
    for(let j= 2; j< i; j++) {
    if(i%j ==0) {
    console.log(`${wholeNum} is not a prime number`);
    }   
    console.log(`${wholeNum} is a prime number`);
       }
}*/
/*let i = 1;
while(i >= wholeNum) {
    if(wholeNum % (i++) === 0)
    console.log(`Complicated`)
    i++
}*/

for(i=2; i<=wholeNum; i++){
    if(wholeNum % i !== 0){
    console.log(" Prime ")
    }
     else{
        console.log("not prime")
       } 
         
}
  