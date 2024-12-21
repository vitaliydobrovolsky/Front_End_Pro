
const parent = document.getElementById('ul');
const addElem = document.getElementById('btn')
const ul = document.getElementById('ul')
const input = document.getElementById('mytask');
const li = document.getElementsByTagName('li')


addElem.addEventListener('click', (event) => {
    const li = document.createElement("li");
    const newButton = document.createElement('button')
    newButton.textContent = 'Delete'
    const val1 = 'ul_li'
    li.setAttribute('id', val1)
    li.appendChild(document.createTextNode(input.value));
    const val2 = 'deleteNode(this)'
    newButton.setAttribute('onclick', val2)
    ul.appendChild(li);
    li.appendChild(newButton)
});


function deleteNode(item){
    item.parentNode.remove()
}

$(document).ready(function(){
    $(".ul_li")
})









