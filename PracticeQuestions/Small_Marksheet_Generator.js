console.log("Enter obtained marks of your subjects");

let english = Number(prompt("Enter marks of your English Subject"));
let math = Number(prompt("Enter marks of your Math Subject"));
let physics = Number(prompt("Enter marks of your physics Subject"));
let biology = Number(prompt("Enter marks of your biology Subject"));
let chemistry = Number(prompt("Enter marks of your chemistry Subject"));

let total = english + math + physics + biology + chemistry;
console.log("Total marks are " + total);

let percentage = (total/500)*100;
console.log("total percentage is " + percentage + "%");


if(percentage>=50 && (english>=35 && math>=35 && physics>=35 && biology>=35 && chemistry>=35)){
    console.log("pass")
}
else{
    console.log("fail")
}



if(percentage>90){
    console.log("A+ grade")
}
else if(percentage>=80){
    console.log("A grade")
}
else if(percentage>=70){
    console.log("B grade")
}
else if(percentage>=60){
    console.log("C grade")
}
else if(percentage>=50){
    console.log("D grade")
}
else if(percentage<50){
    console.log("Fail")
}
else{
    console.log("invalid")
}
