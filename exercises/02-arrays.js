const {
  printFirstName,
  printMiddleName,
  printLastName,
  printFullName,
  subStringFromLastName,
  lastLetter
} = require("./01-strings");

//---------- DO NOT EDIT ABOVE THIS LINE --------------------

/**
 * JavaScript gives us a function called console.log() to print our results to the console.
 * Using the console.log() function, write the following excercises to the console.
 * ie: console.log("hello world") will print "hello world" to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

 */

// //////////////////////////////////
// /////////// Arrays ///////////////
// //////////////////////////////////

/**
 * Create an array named fullNameArray. Using fullName, populate fullNameArray with the values of your first middle and last names.
 * @returns {Array} array
 */

// var fullNameArray = [firstName, middleName, lastName];

function createFullNameArray() {
  return fullNameArray;
}

/**
 * Access the values of your first, middle and last names from fullNameArray. Store the results in a greeting.
 * ie: var greeting = "hello, my name is @string @string @string ";
 * @param {*} fName
 * @param {*} mName
 * @param {*} lName
 * @returns {String} string
 */

function createGreeting(fName, mName, lName) {
  return greeting;
}

/**
 * Create an array of your five top favorite takeout foods.
 * @returns {Array} array
 */

function topFiveTakeOutFoods() {
  return takeoutFoods;
}

/**
 * Remove the first item from the takeout array. Store the result in a variable.
 * @return {String}
 */

function removeFirstItem() {}

/**
 * Add a new item to the beginning of the takeout array.
 * @returns {String}
 */

function addNewItemToBeginning() {}

/**
 * Remove an item from then end of the takeout array. Store the result in a variable.
 * @returns {String}
 */

function removeItemFromEnd() {}

/**
 * Add a new item to the end of the takeout array.
 * @returns {String}
 */
function addItemToEnd() {}

/**
 * Return a copy of index items 2 through 4. Store the results in a variable.
 * @returns {Array}
 */

function createSubArray() {}

/**
 * Create and empty array. Copy the last three items from the takeout array into the new array.
 * @returns {array}
 */

function createNewArray() {}

/**
 * Create a comma-delimited String using the takout array.
 * @returns {String}
 */
function createCommaDelimitedString() {}

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = {
  createCommaDelimitedString,
  createNewArray,
  createSubArray,
  createGreeting,
  createFullNameArray,
  removeFirstItem,
  removeItemFromEnd,
  addItemToEnd,
  addNewItemToBeginning
};
