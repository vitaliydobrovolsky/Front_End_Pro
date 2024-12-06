const form = document.getElementById('form');

form.addEventListener('submit', e =>{
e.preventDefault();
const formData = new FormData(e.target);
const values = Object.fromEntries(formData);


function Validate() {
    const name = document.getElementById("name").value;
    const name2 = document.getElementById("name");
    const phone = document.getElementById("phone").value;
    const phone2 = document.getElementById("phone");
    const message = document.getElementById("message").value;
    const message2 = document.getElementById("message");
    const email = document.getElementById("email").value;
    const email2 = document.getElementById("email");
    const divp1 = document.getElementById('div_p1')
    const divp2 = document.getElementById('div_p2')
    const divp3 = document.getElementById('div_p3')
    const divp4 = document.getElementById('div_p4')

    let regex = /[a-zA-Z0-9]/;
    if (regex.test(name)) {
        return true;
    } else {
        
        divp1.style.visibility = "visible";
        name2.style.border = "red solid 3px";     
    }

    let regex2 = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;
    if (regex2.test(phone)) {
        return true;
    } else {
       divp3.style.visibility = "visible";
        phone2.style.border = "red solid 3px";     
    }

    let regex3 = /^.{5,}$/;
    if (regex3.test(message)) {
        return true;
    } else {
       
       divp2.style.visibility = "visible";
        message2.style.border = "red solid 3px";     
    }
    
    let regex4 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex4.test(email)) {
        return true;
    } else {
       
       divp4.style.visibility = "visible";
        email2.style.border = "red solid 3px";     
    }
}

Validate()
console.log(values)
form.reset();
})
