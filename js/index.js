let info = prompt(`Enter any kind of phrase`);
let letter = prompt(`Enter any letter which you want to remove from phrase entered`);
let info2 = '';
let infoFinal = '';


function phrase(deletion) {
   
   // for(k = 0; k < info.length; k++) {

    for(i = 0, k = 0;  i < info.length, k < info.length; i++, k++) {
        //console.log(info.length);
        if(info[i] !== letter[k]) {
            console.log(info[i])
          info2 += info[i];
        }   
      }
     
      alert(info2)  
    }
    
     
//}   

    phrase();
    