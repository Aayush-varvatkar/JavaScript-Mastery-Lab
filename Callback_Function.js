// callback

// let processUser = (name, callback) => {
//     console.log(`hello processUser ${name}`)
//     callback(name)
// }
// let greet = name => console.log(`Hello ${name}`);

// processUser("Aayush", greet)




let makeGreeter = () => {
    console.log("this is main function")
      function greet(name){
        console.log(`hellow ${name}`)
    }
    return greet
}

let sayHii = makeGreeter();
sayHii('Aayush')
