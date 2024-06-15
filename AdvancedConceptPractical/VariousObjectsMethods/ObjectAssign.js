const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);

console.log(returnedTarget === target);
// Expected output: true

const obj = { a: 1 };
const copy = Object.assign({}, obj);

console.log(copy);

// CLone
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }


//Merging objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const newobj = Object.assign(o1, o2, o3);
console.log(newobj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

const a1 = { a: 1, b: 1, c: 1 };
const a2 = { b: 2, c: 2 };
const a3 = { c: 3 };

const aobj = Object.assign({}, a1, a2, a3);
console.log(a1); 
console.log(aobj); // { a: 1, b: 2, c: 3 }

const b1 = { a: 1 };
const b2 = { [Symbol("foo")]: 2 };

const bbj = Object.assign({}, b1, b2);
console.log(bbj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
