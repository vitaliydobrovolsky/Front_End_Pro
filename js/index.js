const elText= document.getElementById('text')
const elButton = document.getElementById('btn')
elText.style.color = 'blue'



    elButton.addEventListener('click', function(event) {
        if(elText.style.color === 'blue') {
            elText.style.color = 'red'
        } else if (elText.style.color === 'red'){
            elText.style.color = 'blue'
        }
    });