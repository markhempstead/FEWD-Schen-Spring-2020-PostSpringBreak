// functions
// a reusable block of code

// function always return a value
var num1 // did not exist
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

var add1 = add(1, 2);
console.log(add1);

add(3, 4);
add(54, 1155);
add(10, 4593);

console.log(subtract(9, add1));




// Exersice

// title case car
// the first letter should be uppercased
// each letter after the first letter should be lowercased
// can we isolate the first letter? how ?


// item[0] needs to be uppercased
// 'name'.toUpperCase()


var car = 'clowncar'

// Solution 
car = car[0].toUpperCase() + car.slice(1)
console.log(car)


var array = ["ray", "mark", "sandy", "lizzy", "tom"];
var pets = ['cat', 'dog']

function titleCase( arr ) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr;
}

console.log(titleCase(array))
console.log(titleCase(pets))



