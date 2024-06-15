// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
const s = new Object(undefined);

console.log(s);

const os = Object(undefined);
console.log(os);

const numberObj = new Number(1);
console.log(typeof numberObj); // "object"
console.log(numberObj);
const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"
console.log(bigintObj);
const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
console.log(symbolObj);