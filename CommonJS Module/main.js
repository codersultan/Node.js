const copules = require("./data.js").copules;
const ageCal = require("./function.js");

copules.forEach((item, index) => {
  if (index == 2) {
    console.log(ageCal(item.name, item.year));
  }
});
