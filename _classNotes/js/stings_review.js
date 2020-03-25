var str = "this is a string and it goes on and on and on";

console.log(str.toUpperCase());
console.log(str.replace("th", "dis"));

console.log(str.substring(0, 7));

console.log(str.length);

console.log(str.charAt(3));

console.log(str.charAt(str.length - 1));

var smallString = str.substring(0, 7);

console.log(smallString);

var lastLetter = str.charAt(str.length - 1);

console.log(lastLetter.indexOf("a"));

console.log(str.slice(0, 24) + " ...")

