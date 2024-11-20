const enterUrl = document.getElementById('btn1')
const openUrl = document.getElementById('btn2')

let url = '';

enterUrl.addEventListener('click', function(){
      url = prompt('enter your url');    
     
}) 
    
openUrl.addEventListener('click', function(){
    if (url === '') {
        alert('You did not enter any url');
    } else {
        location.href = url
    }
     
})






/*function text() {
     url = prompt('enter your url');
};


enterUrl.addEventListener('click', text);*/

