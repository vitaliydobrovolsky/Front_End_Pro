
function expr(info) {

  info = prompt(`Please enter number more than 100`); 

for(i = 0; i < 9; i++ ) {
   
       if (info <= 100 &&  Number) { 
        info = prompt(`Please enter number more than 100`);
       } else if (typeof info !== Number) {
       // console.log(`You entered ${info}`); break;
       // alert(`You entered ${info}`); break;
       } else if (info > 100 &&  Number ) {
        //console.log(`You entered ${info}`); break;
      //  alert(`You entered ${info}`); break;
       } 
       
        } 
   console.log(`You entered ${info}`)
   alert(`You entered ${info}`); 
  
     } 

let value = expr()


