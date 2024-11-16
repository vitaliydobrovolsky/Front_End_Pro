const elText= document.getElementById('text')
const elButton = document.getElementById('btn')
elText.style.color = 'blue'

elButton.addEventListener('click', (event) => {
    if(event.elText.style.color === 'blue') {
        event.elText.style.color === 'red'
    } else {
        event.elText.style.fontColor === 'blue'
        console.log('elButton clicked')
    }
} )