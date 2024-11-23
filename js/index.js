const form = document.getElementById('form');

form.addEventListener('submit', e =>{
e.preventDefault();
const formData = new FormData(e.target);
const values = Object.fromEntries(formData);

console.log(values)
})



const range = document.getElementById('range');
const img = document.getElementById('img');

range.addEventListener('input', function(){
    const size = range.value;
    img.style.width = `${size}px`;
    img.style.height = `$auto`;
    
    })