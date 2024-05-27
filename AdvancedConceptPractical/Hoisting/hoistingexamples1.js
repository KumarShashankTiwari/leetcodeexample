
// Noted

// Scope, Re-declarable, Hoisting, Mutable
// undeclared, global, √, √, √
// var, function, √, √, √
// let, block, x, x, √
// const, block, x, x, x

// Example 1

// var a=2;
// var a=3;
// console.log(a);
//3

// Example 2

// var a=2;
// var a=3;
// let a=2;
// console.log(a);

// Cannot redeclare a already been 

// Example 3

// var a=2;
// var a=3;
// let b=4;
// b=5;
// console.log(a);
// console.log(b);
//3
//5

// Example 4

// var a=2;
// var a=3;
// const b=4;
// b=5;
// console.log(a);
// console.log(b);

// //Assignmnet to a constant variable

// Example 5

// a=2;
// console.log(a);
// var a;
// 2

//Solution Behind scene
// step 1 var a=undefined;
// step=2 a=2;
// step 3 console.log(a);
 
// Example 6

// console.log(a);
// let a=2;

//Solution Behind scene
// step 1 let a;
// step=2 console.log(a)// Cannot access before initialize
// step 3 a=2;

// Example 7

// let a;
// console.log(a);
// a=2;
// console.log(a);



// Example 8
// var a=5;
// let m=5;
// function getName(){
//     var a=2,b=3;
//     var c=a+b;
//     console.log("c",c);
//     console.log("Shashank");
// }

// console.log(getName);
// console.log(a);


//  getName();