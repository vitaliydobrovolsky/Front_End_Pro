


const inputText = document.getElementById('todo-item__description')

const items = JSON.parse(localStorage.getItem("js--todos-wrapper")) || [];  
function addTodo() {
    var inputBox =  document.getElementById("js--form__input");
    var item = inputBox.value;
    
    if (item === "")
      return (document.getElementById("js--form__input").innerHTML =
        "You need to put in a number");
    items.push({
      value: item,
    });
    
    localStorage.setItem("js--todos-wrapper", JSON.stringify(items));
    newElement();
   
  }


const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault()
} )

function newElement() {
  
  const li = document.createElement("li");
  const inputValue = document.getElementById("js--form__input").value;
  const t = document.createElement('span');
  const inputBox = document.getElementById("js--form__input");
  var item = inputBox.value;
  t.id = "todo-item__description";
  const inputT = document.createTextNode(inputValue)
  t.appendChild(inputT)
  li.className = "todo-item";
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  li.appendChild(checkBox);
  li.appendChild(t);
  
    const btn = document.createElement("button");
    const txt = document.createTextNode("Delete");
    btn.className = "todo-item__delete";
    btn.appendChild(txt);
    li.appendChild(btn);
    document.getElementById("js--todos-wrapper").appendChild(li);
    
   
  
  /*if (inputValue === '') {
    return false
  } else {
    items.push({
        value: item,
      });
    document.getElementById("js--todos-wrapper").appendChild(li);
  }*/
  document.getElementById("js--form__input").value = "";

  const close = document.getElementsByClassName("todo-item__delete");
  for (i = 0; i <= close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
   
  } 
  
}

    


  console.log(items)