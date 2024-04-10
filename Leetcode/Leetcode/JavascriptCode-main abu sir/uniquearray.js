// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let subarray = [2, 5, 7, 9, 2, 1, 4, 2];

//solution 1
let result1 = [...new Set(subarray)];

//solution 2
let result2 = subarray.filter((num, index) => index == subarray.indexOf(num));

console.log(result1);
console.log(result2);

//solution 3

let noduplicate = [];
for (let i = 0; i < subarray.length; i++) {
  if (noduplicate.indexOf(subarray[i]) === -1) {
    noduplicate.push(subarray[i]);
  }
}
console.log(noduplicate);
console.log("No Duplicate", noduplicate);
