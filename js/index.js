let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let hum = document.querySelector(`.hum`)
const refreshBtn = document.getElementById("btnRefresh");


 
button.addEventListener('click', function(){    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 
})


const displayData=(weather)=>{
    temp.innerText=`${Math.round(weather.main.temp)}°C`
    desc.innerText=`${weather.weather[0].main}`
    hum.innerText=`Humidity:${weather.main.humidity}%`;
}


refreshBtn.addEventListener("click", function handleClick() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
});
