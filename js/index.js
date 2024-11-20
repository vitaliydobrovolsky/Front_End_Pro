
const parent = document.getElementById('ul');
const addElem = document.getElementById('btn')
const ul = document.getElementById('ul')
const input = document.getElementById('mytask');
const li = document.getElementsByTagName('li')

addElem.addEventListener('click', (event) => {
    const li = document.createElement("li");
    const newButton = document.createElement('button')
    newButton.textContent = 'Delete'
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(newButton)
});


parent.addEventListener('click', (event) => {
    if( event.target.textContent === 'Delete' ) {
        for (let i = 0; i <li.length; i++){
             li[i].querySelector("button").addEventListener("click",
             function(){
             this.closest("li").remove();
             });             
           }
    }
    console.log(event.target.textContent)
});




  /* for (let i = 0; i <li.length; i++){
     /* li[i].addEventListener("click", function(){
         this.classList.toggle("active");
      });*/
    /*  li[i].querySelector("button").addEventListener("click",
      function(){
         this.closest("li").remove();
      });
      
    }*/