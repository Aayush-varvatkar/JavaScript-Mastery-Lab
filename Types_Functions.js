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


let sayHello2 = name => console.log(`hellow ${name}`);  
sayHello2("bindok")


let sayHello3 = (a,b)=> console.log(`hule luyya.. ${a}`)
sayHello3('Hule luyya')