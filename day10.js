import fetch from 'node-fetch';


console.log("This is day 9");

async function testAwait() {
    console.log('Inside testAwait function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    if ("hello" !== '') {
        throw new Error("Oops, you didn’t type hello")
    }
    return users;
}

console.log("Before calling testAwait")
let a = testAwait();
console.log("After calling testAwait")

a.then(data => console.log(data)).catch((err)=> console.log(err))
console.log("Last line of this js file")




