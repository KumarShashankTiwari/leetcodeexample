// Declared vs Non Declared Variables

// "use strict";

// Example 1 

y=2
y=3
console.log(y);

// Example 2
const funName = () => {
A = 10;
let b = 20;
const c = 30;
console.log(A,b,c);
}
funName();
console.log(A);



// Reason Solution

// ReferenceError: assignment to undeclared variable "x"
// The JavaScript strict mode-only exception "Assignment to undeclared variable" occurs when the value has been assigned to an undeclared variable.

// Message
// ReferenceError: x is not defined (V8-based)
// ReferenceError: assignment to undeclared variable x (Firefox)
// ReferenceError: Can't find variable: x (Safari)

// Error type
// ReferenceError in strict mode only.

// What went wrong?
// A value has been assigned to an undeclared variable.
// In other words, there was an assignment without the var keyword. There are some differences between declared and undeclared variables, which might lead to unexpected results and that's why JavaScript presents an error in strict mode.

// Three things to note about declared and undeclared variables:

// 1. Declared variables are constrained in the execution context in which they are declared. Undeclared variables are always global.
// 2. Declared variables are created before any code is executed. Undeclared variables do not exist until the code assigning to them is executed.
// 3. Declared variables are a non-configurable property of their execution context (function or global). Undeclared variables are configurable (e.g. can be deleted).