
function expr(info) {

  info = prompt(`Please enter number more than 100`); 

for(i = 0; i < 9; i++ ) {
   
       if (info <= 100) { 
        info = prompt(`Please enter number more than 100`);
       } else if (isNaN(info)) {
       // console.log(`You entered ${info}`); break;
       // alert(`You entered ${info}`); break;
       } else if (info > 100) {
        //console.log(`You entered ${info}`); break;
      //  alert(`You entered ${info}`); break;
       } 
       
        } 
   console.log(`You entered ${info}`)
   alert(`You entered ${info}`); 
  
     } 

let value = expr()


