/*let elem1 = document.getElementsByClassName("list")
console.log(elem1)


const elem2 = document.getElementsByTagName("li")

const second = elem2[1];
second.textContent = "Pix"


let elem3 = document.getElementsByTagName("div") 
//elem3.style.color = 'blue'

console.log(elem3)

const clickButton = document.getElementById('btn');
function text() {
    alert('Hello')
    console.log('text')
}

clickButton.addEventListener('click', text);*/

/*let elem1 = document.getElementsByClassName(".link1")
const burgermenue =  document.getElementById('btnmenue')
function bMenue() {
    
}

elem1.style.display = "none";
clickButton.addEventListener('click', bMenue);  


clickButton.removeEventListener('click', text);*/

function table() {
    
    document.write("<table border= \" 1 \" cellspacing= \" 0 \" cellpadding= \"2 \"align= \"center \" >")
    
    for (var i = 1; i <= 10; i++)
    
    {document.write("<tr>");
    
       for (var j = 1; j < 10; j++)
    
        {document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")}
    
    document.write("</tr>")
    
    }
    
    document.write("</table>")
    
    }
    
    table()