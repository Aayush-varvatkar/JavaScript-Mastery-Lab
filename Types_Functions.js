// Function declaration:
function greet(name){
    console.log(`hellow ${name}`)
}
greet("sarthak");


// Function expresstion
let sayHii = function(friend){
    console.log(`hellow ${friend}`);
}
sayHii("mitro");


// Arrow function 
let sayHello1 = () => {
    console.log("hellowww");
}
sayHello1();


let sayHello2 = name => console.log(`hellow ${name}`);   // no paranthesis needed for for single parameter
sayHello2("bindok")


let sayHello3 = (a,b)=> console.log(`hule luyya.. ${a}`)  // single line can be written without {}
sayHello3('Hule luyya')

let add = (a,b) => a+b;  // instead of return statement.. written directly for single line
console.log(add(5,2));
