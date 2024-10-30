let info = prompt(`Enter any kind of phrase`);
let letter1 = prompt(`Enter 1st letter to be remove from phrase you entered`);
let letter2 = prompt(`Enter 2nd letters to be remove from phrase you entered`);
let infoFinal = ''

function phrase(deletion) {
    
    for(i=0; i < info.length; i++) {
        console.log(info.length);
        if(info[i] !== letter1 && info[i] !== letter2) {
          infoFinal += info[i];
        }   
      }
   alert(infoFinal)  
     
}   

    phrase();
    