

function expr(info) {



  info = prompt(`Please enter number more than 100`); 

for(i = 0; i < 9; i++ ) {
   
       if (info <= 100 &&  Number) { 
        info = prompt(`Please enter number more than 100`);
       } else if (info !== Number) {
        console.log(`You entered ${info}`); break;
        alert(`You entered ${info}`); break;
       } else if (info > 100 &&  Number ) {
        console.log(`You entered ${info}`)
        alert(`You entered ${info}`);
       } else if (i = 3) {
        console.log(`You entered ${info}`)
        alert(`You entered ${info}`);
       }
       
        } 
   console.log(`You entered ${info}`)
   alert(`You entered ${info}`); 
   
     } 


let value = expr()
if (value <= 100 &&  Number) {
    alert(value)
}


