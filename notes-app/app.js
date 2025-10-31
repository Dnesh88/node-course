/* 1. writing to file 
 //importing core module fs (no file path)
 const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Dinesh.");
fs.appendFileSync("notes.txt", "\nI am a coding god really.");
 */

/* 2. importing function from custom module
// import custom module
const addition = require("./utils.js");
const sum = addition(2, 2); //using imported function
console.log(sum);
*/

/* 3. getNotes() 
const getNotes = require("./notes.js");
console.log(getNotes());
*/

//
