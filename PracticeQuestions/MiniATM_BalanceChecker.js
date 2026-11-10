let balance = 10000;

let withdrawl = Number(prompt("Enter withdrawl amount"));

if(withdrawl>0){if(withdrawl<=balance){
    console.log(withdrawl + " amount is withdrwal successfully")
    balance -= withdrawl;
    console.log(balance);
}
else{
    console.log("insufficient balance");
}}
else{
    console.log("invalid amount")
}