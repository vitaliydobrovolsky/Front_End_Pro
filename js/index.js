
const parent = document.getElementById('ul');
const addElem = document.getElementById('btn')
const ul = document.getElementById('ul')
const input = document.getElementById('mytask');
const li = document.getElementsByTagName('li')


addElem.addEventListener('click', (event) => {
    const li = document.createElement("li");
    const newButton = document.createElement('button')
    const par = document.createElement('p')
    newButton.textContent = 'Delete'
    const val1 = 'ul_li'
    li.setAttribute('id', val1)
    par.appendChild(document.createTextNode(input.value));
    const val2 = 'deleteNode(this)'
    newButton.setAttribute('onclick', val2)
    const val3 = 'showModal()'
    par.setAttribute('onclick', val3)
    ul.appendChild(li);
    li.appendChild(par)
    li.appendChild(newButton)
    
});
function deleteNode(item){
    item.parentNode.remove()
}



let modal = new bootstrap.Modal(document.getElementById('gfg'));
function showModal() {
modal.show();

}




$(document).ready(function(){
    $("#ul_li").click(function(){
        
    })
})









