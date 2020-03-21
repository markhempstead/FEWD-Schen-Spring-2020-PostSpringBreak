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

/////////////////////////////////
///////////  Strings ////////////
/////////////////////////////////

/**
 * @description
 * create a variable and set the value to your first name
 * ie: var firstName = "your first name"
 * @returns {String} String
 */

function printFirstName() {
  // your solution here
  let firstName = "";
  return firstName;
}

/**
 * @description
 * Create a variable called middleName and set the value to your middle name.
 *
 * @returns {String} String
 */

function printMiddleName() {
}

/**
 * @description
 * Create a variable called lastName and set the value to your last name.
 * @returns {String} String
 */

function printLastName() {
}

/**
 * @description
 * 1) create 3 global variables for your first, middle and last names
 * 2) in the printFull name function contactinate firstName, middleName and lastName. Store the result in a variable called fullName.
 * 3) call the function
 *
 * @param {String} String
 * @param {String} String
 * @param {String} String
 * @returns {String} String
 */

// Add global variables here

function printFullName() {
}

// call function here, passing the global variables as agruments.
// remember to wrap your function in a console.log to see your results printed to the console.

/**
 * @description
 * Create a substring of the last three letters of lastName.
 *
 *
 * @param {String} String
 * @returns {String} String
 */

function subStringFromLastName() {
}

// call function here, passing lastName as an argument

/**
 * @description
 * 1) create a local variable in lastLetter called fullName and set its value to your full name
 * 2) Access the last letter in fullName.
 * 3) call lastLetter using any full name of your choosing
 *
 * @param {String} String
 * @returns {String} String
 */
function lastLetter() {
}

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = {
  printFirstName,
  printMiddleName,
  printLastName,
  printFullName,
  subStringFromLastName,
  lastLetter
};
