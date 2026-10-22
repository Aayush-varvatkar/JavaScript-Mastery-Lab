// find the average marks of entire class

/*
let marks = [78, 85, 90, 88, 76, 95, 80];

let sum = 0;

for (let eachmark of marks) {
    sum = sum + eachmark;
}
console.log(sum);

let average;
average = sum / marks.length;

console.log("Average marks of the class is " + average)
*/





// For a given array with prices of 5 items -> [250, 654, 300, 900, 50]
// All items have an offer of 10% OFF on them. 
// change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

let offer = 0;

for(let i=0; i<items.length; i++){
  offer = items[i]/10;
  items[i] -= offer;
}
console.log(items)
 