// Objects

const persons = [
  {
    name: "mary",
    middleName: "",
    profile: "",
    age: 30,
    sing: function() {
      return this.name + " is singing a song";
    },
    loggedIn: false
  },
  {
    name: "bob",
    middleName: "robert",
    age: 30,
    hobbies: ["signing", "swimming"],
    loggedIn: true
  },
  {
    name: "joe",
    middleName: "george",
    age: 33,
    sing: function() {
      return this.name + " is singing a song";
    },
    loggedIn: false
  }
];

console.log(section);

var section = document.getElementById("names");
for (var i = 0; i < persons.length; i++) {
  section.innerText = persons[i].name;
}

console.log(persons);
console.log(persons.name);
console.log(persons.age);
// console.log(persons.sing());
