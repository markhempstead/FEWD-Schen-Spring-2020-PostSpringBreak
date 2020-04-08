function add(a, b) {
  console.log(a + b);
  return a + b;
}

function sub() {
  console.log(9 - 2);
}

add(3, 5);
add(7, 3);
add(8, 8);
add(39, 1837753);

sub();

function greeting(name) {
  console.log("hello " + name);
}

greeting("Mark!");

function printName() {
  let reallyCoolName = "Im awesome";
  console.log(reallyCoolName);
  return reallyCoolName;
}

function printNames() {
  var names = ["jimmy", "jack", "johhny", "jose"];

  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

console.log(printNames());

// DOM manipulation
var section = document.getElementById("section");

section.innerHTML = "<p>hello world</p>";
console.log(section);
