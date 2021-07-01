let lodash = require("lodash");

let name = "alpha";
 
name = lodash.upperFirst(name);

console.log(name);


name = lodash.upperFirst(name);
console.log(name);

const fixNames = (caps) => {
    result = caps.toLowerCase();
    result = lodash.upperFirst(result);
    return result;
}

let NAME = "BAHALPHA";
console.log(fixNames(NAME));
console.log(lodash.startCase)