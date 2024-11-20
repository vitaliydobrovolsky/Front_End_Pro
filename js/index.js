const child = document.getElementById('btn');
const parent = document.getElementById('parent');


parent.addEventListener('click', function(event) {
    console.log('You pressed:' + event.target.textContent)
    if (event.target.textContent === 'Button 1' || event.target.textContent === 'Button 2' || event.target.textContent === 'Button 3') {
      alert('You pressed:' + event.target.textContent)
    } else {
        alert('You did not press any button')
    }
})

