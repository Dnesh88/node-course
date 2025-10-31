console.log("utils.js");
const name = "dinesh";

const add = function (x, y) {
  return x + y;
};

// return values when this module is imported
// module.exports = name;

module.exports = add;
