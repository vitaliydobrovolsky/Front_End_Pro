let array = ["hello", 12, "/", 23, 1, "pp", "buy", 52, 41, 2, "!!"];

let finalArray = 0;
let element = 0;
let array2 = [];

function arithMean() {
    for(i = 0; i < array.length; i++) {
        if(+array[i]) {
           let n = +array[i];
          
            finalArray += n;
            array2.push([n]);
            console.log(finalArray)
        }    
    }
    //console.log(finalArray);
    //alert(finalArray)
    //alert(array2)
    
   
   //console.log(array2.length)
   
   result = finalArray / array2.length;
   alert(result)
}

arithMean();