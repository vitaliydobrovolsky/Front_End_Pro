let array = ["hello", 12, "/", 23, 1, "pp", "buy", 52, 41, 2, "!!"];
let finalArray = '';

function arithMean() {
    for(i = 0; i < array.length; i++) {
        if(array[i] >= 0) {
           let n = +array[i];
            finalArray += n;
            console.log(finalArray);
            console.log(i);
        }
    }
    console.log(finalArray);
    
}

arithMean();