/**
 * @description
 * JavaScript gives us a function called console.log() to print our results to the console.
 *
 * Using the console.log() function, print the following excercises to the console.
 * ie: console.log(firstname('my first name')) will print "my first name" to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 */

/////////////////////////
/////// Variables ///////
/////////////////////////

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations

 */
/**
 * @description
 * create three varibles using the var, let, and const key words
 */

var person1 = "George Washington";
let person2 = "George Clinton";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
/////////////////////////
//////// Strings ////////
/////////////////////////

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 */

/**
 * @description
 * create a variable and set the value to your first name
 * ie: var firstName = "your first name"
 *
 */

let firstName = "Ramon";

/**
 * @description
 * Create a variable called middleName and set the value to your middle name.
 */

let middleName = "Ambrose";

/**
 * @description
 * Create a variable called lastName and set the value to your last name.
 */

let lastName = "Vazquez";

/**
 * @description
 * Create a variable called fullName. Assign it the values of firstName, middleName, and lastName
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
 */
let fullName = firstName + " " + middleName + " " + lastName;
/**
 * @do
 * include this file in a new commit and push
 */
