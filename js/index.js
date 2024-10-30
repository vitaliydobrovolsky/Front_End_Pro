let info = prompt(`Enter any kind of phrase`);
let letter = prompt(`Enter 2 letters, which you want to remove from phrase  entered`);

let infoFinal = ''
let a = letter[0];
let b = letter[1];
function phrase(deletion) {
    
    for(i=0; i < info.length; i++) {
        console.log(info.length);
        if(info[i] !== a && info[i] !== b) {
          infoFinal += info[i];
        }   
      }
   alert(infoFinal)  
     
}   

    phrase();
    