let numOrStr = prompt('input number or string');
console.log(numOrStr)



switch(numOrStr) {
    case null:
        console.log('ви скасували');
        console.log(typeof numOrStr);
    break;
    case '':
        console.log('Empty String');
        console.log(typeof numOrStr);
    break;
    case  isNaN(numOrStr):
    console.log('number is Ba_NaN');
    console.log(typeof numOrStr);
     break;
     default:
    console.log('OK!');
    console.log(typeof numOrStr);
}



/*if(numOrStr === null) {
	console.log('ви скасували')
    console.log(typeof numOrStr);
} else if( numOrStr.trim() === '' ) {
	console.log('Empty String');
    console.log(typeof numOrStr);
} else if ( isNaN( +numOrStr ) ) {
	console.log(' number is Ba_NaN')
    console.log(typeof numOrStr);
} else {
	console.log('OK!')
    console.log(typeof numOrStr);
}*/