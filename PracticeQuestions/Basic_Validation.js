let username = "Admin";
let password = "Password";

let userenter = prompt("Enter Username");
let passenter = prompt("Enter Password");

if((userenter === username)&& (password === passenter)){
    console.log("Validate" + userenter)
}
else{
    console.log("not validate")
}