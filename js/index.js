/*function greeting(name) {
    console.log(`Hello ${name}`);
}

function processUserInput(callback) {
    let name = prompt(`Enter your name`);

    callback(name)
}



processUserInput((name) => greeting(name))*/




const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`Successful`)
    }, 1000)
})

promise.then(result => {
    console.log({result})
}).catch(err => {
    console.log({err})
})
console.log(`end`)