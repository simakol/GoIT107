//! named export

//* v1
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const mult = (a, b) => a * b;
// export const divide = (a, b) => a / b;

//* v2

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;

export { add, subtract, mult, divide };

//! default export

export default Math.PI;
