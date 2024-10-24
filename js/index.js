let age = prompt("How old are u?");
if(age) {
    Message1 = `You are ${age} years old`;
    console.log(Message1);
} else {
    Message1 = `So sad, you did not put your age`;
    console.log(Message1);
}


let city = prompt("In which city are u living now?");
  if(city === "Kyiv") {
    Message2 = `You are living in the capital of Ukraine`;
    console.log(Message2);
} else if(city ==="Washington") {
    Message2 = `You are living in the capital of USA`;
    console.log(Message2);
} else if(city === "London") {
    Message2 = `You are living in the capital of GB`;
    console.log(Message2);
}  else if(city === '') {
        Message2 = `So sad, you did not put your city`;
        console.log(Message2);
} else if(city === null) {
    Message2 = `So sad, you did not put your city`;
    console.log(Message2);
} else {
    Message2 = `You are living in the ${city}`;
    console.log(Message2);
}


let sport = prompt("What's your favourite kind of sport?");
if(sport === "football") {
    Message3 = `Wanna be like Ronaldo?`;
    console.log(Message3);
} else if(sport === "big tennis") {
    Message3 = `Wanna be like Federer?`;
    console.log(Message3);
} else if(sport === "box") {
    Message3 = `Wanna be like Usik?`;
    console.log(Message3);
} else if(sport === '') {
    Message3 = `So sad, you did not put your favourite sport`;
    console.log(Message3);
}    else if(sport === null) {
        Message3 = `So sad, you did not put your favourite sport`;
        console.log(Message3);
  
} else {
    Message3 = `${sport} is greate sport!`;
    console.log(Message3);
}

let answer = `${Message1}; ${Message2}; ${Message3}`;
console.log(answer);
alert(answer)

  /* if(age && city === "Kiyv" && sport === "football") {
    alert(`You are ${age} years old, living in the capital of Ukraine & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age && city === "Washington" && sport === "football") {
    alert(`You are ${age} years old, living in the capital of USA & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age && city === "London" && sport === "football") {
    alert(`You are ${age} years old, living in the capital of GB & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age && city === "Kiyv" && sport === "big tennis") {
    alert(`You are ${age} years old, living in the capital of USA & wanna be like Federer?`);
    //console.log(message2);
} if(age && city === "Washington" && sport === "big tennis") {
    alert(`You are ${age} years old, living in the capital of USA & wanna be like Federer?`);
    //console.log(message2);
} if(age && city === "London" && sport === "big tennis") {
    alert(`You are ${age} years old, living in the capital of GB & wanna be like Federer?`);
    //console.log(message2);
} if(age && city === "Kiyv" && sport === "box") {
    alert(`You are ${age} years old, living in the capital of Ukraine & wanna be like Usik?`);
    //console.log(message2);
} if(age && city === "Washington" && sport === "box") {
    alert(`You are ${age} years old, living in the capital of USA & wanna be like Usik?`);
    //console.log(message2);
} if(age && city === "London" && sport === "box") {
    alert(`You are ${age} years old, living in the capital of GB & wanna be like Usik?`);
    //console.log(message2);
} if(age && city && sport === "football") {
    alert(`You are ${age} years old, living in the ${city} & wanna be like Ronaldo?`);
} if(age && city && sport === "big tennis") {
    alert(`You are ${age} years old, living in the ${city} & wanna be like Federer?`);
} if(age && city && sport === "box") {
    alert(`You are ${age} years old, living in the ${city} & wanna be like Usik?`);
} if(age && city === "Kiyv" && sport) {
    alert(`You are ${age} years old, living in the capital of Ukraine & it is greate?`);
} if(age && city === "Washington" && sport) {
    alert(`You are ${age} years old, living in the capital of US & it is greate?`);
} if(age && city === "London" && sport) {
    alert(`You are ${age} years old, living in the capital of GB & it is greate?`);
    



}     if(age === "null" || city === "Kiyv" && sport === "football") {
    alert(`So sad, you did not put your age, living in the capital of Ukraine & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age === "null" || city === "Washington" && sport === "football") {
    alert(`So sad, you did not put your age, living in the capital of USA & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age === "null" || city === "London" && sport === "football") {
    alert(`So sad, you did not put your age, living in the capital of GB & wanna be like Ronaldo?`);
    //console.log(message2);
} if(age === "null" || city === "Kiyv" && sport === "big tennis") {
    alert(`So sad, you did not put your age, living in the capital of USA & wanna be like Federer?`);
    //console.log(message2);
} if(age === "null" || city === "Washington" && sport === "big tennis") {
    alert(`So sad, you did not put your age, living in the capital of USA & wanna be like Federer?`);
    //console.log(message2);
} if(age === "null" || city === "London" && sport === "big tennis") {
    alert(`So sad, you did not put your age, living in the capital of GB & wanna be like Federer?`);
    //console.log(message2);
} if(age === "null" || city === "Kiyv" && sport === "box") {
    alert(`So sad, you did not put your age, living in the capital of Ukraine & wanna be like Usik?`);
    //console.log(message2);
} if(age === "null" || city === "Washington" && sport === "box") {
    alert(`So sad, you did not put your age, living in the capital of USA & wanna be like Usik?`);
    //console.log(message2);
} if(age === "null" || city === "London" && sport === "box") {
    alert(`So sad, you did not put your age, living in the capital of GB & wanna be like Usik?`);
    //console.log(message2);


}   if(city === "Null" || age &&  sport === "football") {
    alert(`You are ${age} years old. So sad, you did not put your city. Wanna be like Ronaldo?`);
    //console.log(message2);
} if(city === "Null" || age &&  sport === "big tennis") {
    alert(`You are ${age} years old. So sad, you did not put your city. Wanna be like Federer?`);
    //console.log(message2);
}  if(city === "Null" || age && sport === "box") {
    alert(`You are ${age} years old. So sad, you did not put your city. Wanna be like Usik?`);   
} 


   if(sport === "Null" || age &&  city === "Kiyv") {
    alert(`You are ${age} years old & living in the capital of Ukraine. So sad, you did not put your favoutite sport`);
    //console.log(message2);
} if(sport === "Null" || age &&  city === "Washington") {
    alert(`You are ${age} years old & living in the capital of USA. So sad, you did not put your favoutite sport`);
    //console.log(message2);
}  if(sport === "Null" || age && city === "London") {
    alert(`You are ${age} years old & living in the capital of GB. So sad, you did not put your favoutite sport`);
} 


if(sport === "Null" && age === "Null" ||  city === "Kiyv") {
    alert(`You are living in the capital of Ukraine. So sad, you did not put your age & favourite sport`);
    
} if(sport === "Null" && age === "Null" ||  city === "Washington") {
    alert(`You are living in the capital of USA. So sad, you did not put your age & favourite sport`);
    
}  if(sport === "Null" && age === "Null" || city === "London") {
    alert(`You are living in the capital of GB. So sad, you did not put your age & favourite sport`);
} 


if(sport === "Null" && city === "Null" ||  age) {
    alert(`You are ${age} years old. So sad, you did not put your city & favourite sport`);
}


if(city === "Null" && age === "Null" ||  sport === "football") {
    alert(`So sad, you did not put your age & city. Wanna be like Ronaldo?`);
    
} if(city === "Null" && age === "Null" ||  sport === "big tennis") {
    alert(`So sad, you did not put your age & city. Wanna be like Federer?`);
    
}  if(city === "Null" && age === "Null" || sport === "box") {
    alert(`So sad, you did not put your age & city. Wanna be like Usik?`);
} 

   else {
    alert(`So sad, you did not input all your informatio, as age, city & favourite sport.`);
} */




/*switch(age) {
    case age: 
    let ageMessage = `You are ${age} years old`;
    break;
    case '': 
    alert(`So sad, you did not put your age`);
    break;
    case Null:
    alert(`So sad, you did not put your age`);   
}*/

