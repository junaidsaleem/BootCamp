import fetch from 'node-fetch';

async function testAwait() {
    console.log('Inside testAwait function');
    let response = await fetch('https://api.github.com/users/junaidsaleem')
    const users = await response.json();

    console.log('after response');

    if(users.id !== undefined){
        return users;
    }else{
        throw new Error('User Not Match!');
    }
    
}

console.log("Before calling testAwait")
let a = testAwait();
// console.log(a);
a.then( (value)=> {console.log(value.id)} ).catch((err)=>{ console.log(err)});
console.log("After calling testAwait")

// a.then(data => console.log(data.length)).catch((err)=> console.log(err))
console.log("Last line of this js file")




