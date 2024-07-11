//! named import
import { add, subtract as sub, mult, divide } from "./modules/math.js";

//! default import
import foo from "./modules/rectangle.js";
import pi from "./modules/math.js"

//! namespace import
import * as math from "./modules/math.js";

console.log(add(5, 9));
console.log(mult(2, 4));

console.log(foo(4, 5));

console.log(math);
console.log(math.divide(10, 5));
console.log(pi);


console.log(sub(5, 2));