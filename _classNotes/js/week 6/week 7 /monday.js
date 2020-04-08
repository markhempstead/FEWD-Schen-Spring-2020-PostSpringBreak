let arr = [
  1,
  2,
  3,
  4,
  5,
  "this is a string",
  function add(a, b) {
    return a + b;
  },
  (address = {
    city: "ny",
    state: "ny"
  })
];

let array2 = [
  "peanut butter pretzels",
  "cookies",
  "ice cream",
  "candy"
];

// array2[0];
// array2[1];
// array2[3];
// array2[4];

// itteration

// for (let i = 0; i < array2.length; i++) {
//   console.log(array2[i]);
// }

var name = "Bob";
var car = "Bug";
var age = 80;
var address = "321 Main Street";

var sentence =
  "hello my name is " +
  name +
  " and i drive a " +
  car +
  " i am " +
  age +
  " years of age and i live on " +
  address;

// console.log(sentence);

var total = 10;
var paid = 10;
var balance = total - paid;

var item =
  "i purchased something for " +
  total +
  ". I paid  " +
  paid +
  " i own " +
  balance;

// console.log(item)

// console.log(item.length)

// console.log(item.substring(0, 10))

var index = item.indexOf("n");
console.log(index);
var itemSubstring = item.substring(5, index);
console.log(itemSubstring);
var item2 = item.slice(0, index);
console.log(item2);

var arr2 = ["bob", "nancy", "jim", "scott"];

var  name2 = 'johnson'

// arr2.push(name2)
// arr2.unshift(name2);
var num = 2;
var pre = arr2.slice(0, num)
var post = arr2.slice(num)

// invaild
// var newNames = pre + name2 + post


pre.push(name2)

for (var i = 0; i < post.length; i++) {
  pre.push(post[i])
}

console.log(pre)

console.log(post)




