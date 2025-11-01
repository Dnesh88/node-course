/* converting JS object to JSON string and vice versa */

const fs = require("fs");

const person = {
  name: "Dinesh Sherpa",
  age: 30,
};

// JS object > JSON string
const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// JSON string > JS object
const personParse = JSON.parse(personJSON);
// console.log(personParse, typeof personParse);

// fs.writeFileSync("1-json.json", personJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
