let info = prompt(`Enter any kind of phrase`);
let letter = prompt(`Enter 2 letters, which you want to remove from phrase  entered`);
//let infoFinal = ''


function phrase(info, letter) {

  for(k=0; k < letter.length; k++) { 
    let a = letter[k]; 
    infoFinal = ''; 
    for(i=0; i < info.length; i++) {
         if(info[i] !== a) {  
          infoFinal += info[i];
         }  
    }
      info = infoFinal;        
      //console.log(infoFinal);
  }
  alert(infoFinal)     
}   

    phrase(info, letter);

