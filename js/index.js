
/*const parent = document.getElementById('ul');
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
}*/

$(document).ready(function() {
    //const $parent = $('#ul');
    const $addElem = $('#btn');
    const $input = $('#mytask');
    const $ul = $('#ul');

    $addElem.on('click', function() {
        // Create new elements
        const $li = $('<li>').attr('id', 'ul_li');
        const $newButton = $('<button>').text('Delete').on('click', function() {
            deleteNode($(this));
        });
        const $par = $('<p>').text($input.val()).on('click', function() {
            showModal();
        });

        // Append the new elements
        $li.append($par).append($newButton);
        $ul.append($li);
    });

    // Function to delete a node
    function deleteNode($item) {
        $item.closest('li').remove();
    }

    
});



let modal = new bootstrap.Modal(document.getElementById('gfg'));
function showModal() {
modal.show();
$('#modal_par').append(`text`);
$('#modalText').text("Текст завдання: " + task);
}



$(document).ready(function(){
    $("#ul").children("").click(function(){
        
    })
})













