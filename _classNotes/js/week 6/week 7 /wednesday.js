let state = "NY";
let city = "Brooklyn";

console.log("State: " + state + "\nCity: " + city);

let arrayOfPets = ["sosa", "zuzs", "jumppy"];



// console.log(arrayOfPets[0])
// console.log(arrayOfPets[1])
// console.log(arrayOfPets[2])

for (var i = 0; i < arrayOfPets.length; i++) {
  console.log(i);
  console.log(arrayOfPets[i]);
}

// for(var i = 0; i < 3; i++) {
//     // do something with i
//     console.log("i: " + i)
//     console.log("i * 2: " +i *2)
// }

let store = "OReillys";
// store.toUpperCase();

// for (var i = 0; i < store.length; i++) {

//     let lower = '';

//     if(store[i] === store[i].toLowerCase()) {
//         console.log(lower += store[i].toUpperCase())
//     }
//     console.log(lower)
// }

// log weather numbers 0 through 10 are not divisible by 3 evenly
for (var i = 0; i < 10; i++) {
  if (i % 3 !== 0) {
    console.log(i + " is not divisible by 3");
  }
}

// logical operators

//  && - logical and = true
//  || - logical or  = true or false

var name = "ramon";
var name2 = "Ramon";

// Checking for equality

if (name === name2) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}

// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ": it is even");
//   } else {
//     console.log(i + ": it is odd");
//   }
// }

var drink = "water";

// checking for a true condition.
// if drink is defined log the value of drink

if (drink) {
  console.log(drink);
}

// console.log((0 !== 0 ) ||  (0 === 0));
// console.log(false && true)
