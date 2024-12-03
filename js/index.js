const table = document.getElementById('table');
const myModal = document.getElementById('mymodal');
const newUser = document.getElementById('newuser');


let userlist = ['user']

function renderUserList() {
    userlist.forEach(user => {
        document.addEventListener(type: "DOMcontentLoaded", listener: () :void => {
            const createModal = (title, content) :void => {
                const row = table.insertRow(1);
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3= row.insertCell(2);
                const cell4 = row.insertCell(3);
                const cell5 = row.insertCell(4);
                cell5.innerHTML = "<button id='view';>View</button> <button id='edit';>Edit</button> <button id='delete';>Delete</button>";
            }
        })
        
    
        
       
       // const viewButton = document.createElement('button');
      //  viewButton.textContent = 'View';
       // document.table.appendChild(viewButton);
    })
}

renderUserList()

