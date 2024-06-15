
// Noted

//                       Scope, Re-declarable, Hoisting, Mutable
// undeclared,           global,      √,            √,          √
// var,                  function,    √,           √,           √
// let,                  block,     x,              x,              √
// const,                block,    x,               x,               x

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
// step=2 console.log(a)// Cannot access before initialization
// step 3 a=2;

// Example 7

// let a;
// console.log(a);
// a=2;
// console.log(a);



// example 8
// function multiplyByTen(number) {
//     console.log(ten); // => undefined
//     var ten;
//     ten = 10;
//     console.log(ten); // => 10
//     return number * ten;
//   }
//   multiplyByTen(4); // => 40

  // example 9
// function a() {
//  console.log('1');
//   }
//   a(); 
//   function a() {
//     console.log('2');
//      }
//      a(); 

       // example 10
// function a() {
//     console.log('1');
//      }
//      a(); 
//      function a() {
//        console.log('2');
//         }
//         a(); 


       // example 11

// var a=5
// function huoisting(){
// a=10;
// aa=6;
// function a(){}
// return;
// }
// huoisting();
// console.log(a);

   // example 12


{
    var a=5
 }

console.log(a);


// Example 12
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


// Free code camp


//11
// var a = 1;
// function b() {  a = 10;  return;
//   function a() {}}
// b();
// console.log(a);

//22
// var a = 1;
// function b() {  a = 10;  return;}
// b();
// console.log(a);

//33

// function foo(){    
//     function bar()
//     {  return 3; }    
//     return bar();  
//     function bar() { return 8;}
        
//     }
//     console.log(foo());

//44
// function parent() { 
//     var hoisted = "I'm a variable";
//     function hoisted() 
//     {    
//     return "I'm a function";  
//     }   
//     return hoisted(); 
    
// }
//     console.log(parent());

//5

// function parent() {
//     // Function declaration hoisted with the definition   
//     function hoisted() {  
//         return "I'm a function";
//     }
//     // Declaration ignored, assignment of a string 
//     hoisted = "I'm a variable"; 
//     return hoisted(); 
// }
// console.log(parent());


//6
// console.log(foo());
// function foo() {
// var bar = function() {return 3;}; 
// return bar();
// var bar = function() {return 8;};
// }

//7
// var myVar = 'foo';

// (function() { 
// console.log('Original value was: ' + myVar); 
// var myVar = 'bar';
// console.log('New value is: ' + myVar);})
// ();

//8


// var foo = 5
//  console.log(‘foo:’, foo)
//  var foo;
//  var bar = 10;
//  var bar;
//  console.log(‘bar:’, bar)
//  var baz = 10
//  var baz = 12
//  console.log(‘baz:’, baz)

//8

// greeting()
// var greeting = function () {
//     console.log('Good morning')
// }
// greeting()
// function greeting() {
//     console.log('Good evening')
// }
// greeting()

//9
// var v1 = 10;
// (function(){
//     console.log(v1);     // 10
//     v1 = 20;    // it is not a declaration, declaration is hoisted
//     console.log(v1);     // 20
    
// })();
// console.log(v1);         // 20
// var v1 = 30;

//10
// var v1 = 10;
// (function(){ 
//     v3 = 35                      // hoisted and assigned a value
//     console.log(v3)              // 35
//     var v3 = 45;                 // declaration in function
//     v2 = 25;                     // global variable
//     console.log(v1);           // 10
    
// })();
// console.log(v2);                 // 25
// console.log(v3);            // ReferenceError: v3 is not defined
// var v1 = 30;


//11

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();



// function parent() { 
//        var hoisted = "I'm a variable";
//         console.log('kkkkkkk',hoisted)
//        function hoisted() 
//        {    
//             console.log('kkk',hoisted)
//        return "I'm a function";  
//        }   
//        console.log('ll',hoisted)
//        hoisted()
//        return hoisted(); 
       
//    }
//        console.log(parent());