/*document.getElementById('btn').addEventListener('click', function() { 
    // Generate a random color 
   // const randomFoto = '#' + Math.floor(Math.random()*16777215).toString(16); 
    // Change the text color 
   const newFoto = document.getElementById('img'); 
     floor(Math.random())*randomImage.length
}); */


const fotos = [
    'src="./img/1.PNG" ' ,
    'src="./img/2.PNG" ' ,
    'src="./img/3.PNG" ' ,
    'src="./img/4.PNG" ' ,
    'src="./img/5.PNG" ' ,
    'src="./img/6.PNG" ' ,
    'src="./img/7.PNG" ' ,
    'src="./img/8.PNG" ' ,
    'src="./img/9.PNG" ' ,   
]


const elButton = document.getElementById('btn')
elButton.addEventListener('click', function(event) {

const a = Math.floor(Math.random() * fotos.length);
const randomFoto = fotos[a];

alert(randomFoto)
const newIMG = document.getElementById('img');
newIMG.src = 'randomFoto';


})




//const button = document.getElementById('foto');