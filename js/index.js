let array = [1, 10, 105, 8, 0, 7, 6, 8]
let array2 = [];

function removeElement(conf = confirm(`You have an array [${array}]`), item = +prompt(`Pease add numbers, which you want to remove from array`)) {
     finalArray = '';
     for(i = 0; i < array.length; i++) {
        if(array[i] !== item) {
           let n = array[i];
           finalArray += n;
            array2.push([n]);
           }
      }
   
    alert(array2)
}
removeElement()
















//To remember how it was.
/*let array = [1, 10, 105, 8, 0, 7, 6, 8]
let array2 = [];

function removeElement(conf = confirm(`You have a array ${array}`), item = +prompt(`Pease add numbers, which you want to remove from array`)) {
   // for(k=0; k < 2; k++) { 
   //     console.log(item.length)
  //   let a = +item[k]; 
     finalArray = '';
 //    console.log(item[k])
    for(i = 0; i < array.length; i++) {
        if(array[i] !== item) {
           let n = array[i];
           
             finalArray += n;
             array2.push([n]);
            // console.log(finalArray)
            // console.log(array2)
         }
      }
   //    array = array2;
       //console.log(finalArray);
       
 // }
   
    //alert(finalArray)
    alert(array2)
}
removeElement()*/