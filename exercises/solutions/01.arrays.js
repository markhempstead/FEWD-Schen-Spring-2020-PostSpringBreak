 /////////////////////////
//////// Arrays /////////
/////////////////////////

/**
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @description
 * create an arrays of names
 */

let names = ["Mike", "John", "Maddy", "Steve", "Ada"];
console.log(names);

/**
 * @description
 * access the first item in the array above
 */

let firstItemInNamesArray = names[0];
console.log(firstItemInNamesArray);

/**
 * @description
 * access the last character in the first item in the array above
 */

let lastCharInFirstNameItem = firstItemInNamesArray.charAt(
  firstItemInNamesArray.length - 1
);
console.log(lastCharInFirstNameItem);

/**
 * @do
 * include this file in a new commit and push
 */
