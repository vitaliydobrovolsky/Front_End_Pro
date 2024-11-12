/*const user = {
    name: "John"
}

console.log(user['name'])*/

/*const userlist = [{id:1, name: 'john' }, {id:1, name: 'Cris' }];

const userObj = Object.entries(userlist).reduce((acc, [key, value]) => {
    return {...acc, 'key': value};
},{});

console.log(userObj['1']);*/

/*const userObj = {
    1:{id:1, name: 'john', salary: 200 }, 
    2:{id:1, name: 'Cris', salary: 200  }
};
console.log(userObj[2])
const userList = Object.values(userObj);
console.log(userList)

const userList1 = Object.keys(userObj);
console.log(userList1)


const userList2 = Object.entries(userObj);
console.log(userList2)

const userList3 = Object.entries(userObj).reduce((acc, [key, value]) => {
    return [...acc, {...value, id:key}];
}, [])

console.log(userList3)  

const userNames = userList.map(function (user)) {
    return userNames
}
console.log(userNames)*/


function sumInput() {
    const number = +prompt('Please add any number');
    let result = 0;
    do {
        const number = +prompt('Please add any number');
         result += number
    } while(Number(number) !== Number) 
        
    
    console.log(result)
}

let result1 = sumInput()
console.log('Summ is:' + result1)