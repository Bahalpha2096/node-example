// let lodash = require("lodash");
// let foo = lodash.round(4.0006, 2);


// console.log(foo);

// const array = [1, 2, 3, 4]
// console.log(array)

// const { result } = require("lodash");
let lodash = require("lodash");
let name = "Alpha";
console.log(name);

name = lodash.upperFirst(name);
console.log(name);

const fixNames = (caps) => {
    result = caps.toLowerCase();
    result = lodash.upperFirst(result);
    return result;
}

let NAME = "ALPHA";
console.log(fixNames(NAME));
