/* WAP Pattern Reversed Pyramid Star Pattern
**********
 *******
  *****
   ***
    *  
    
//Solution Approach

Step 1 Thought like make it separated .

***** *****
 **** ***
  *** **
   ** *
    *  
    * 
Step 2 Thought like make it separated .

***** *****
^**** ***
^^*** **
^^^** *
^^^^*  

Step 3 Thought like make it separated . need to put spaces in place of ^

***** *****
^**** ***
^^*** **
^^^** *
^^^^*  

*/

var pattern7 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 1; indexj <= index; indexj++) {
      stringval += " ";
    }
    for (let indexk = 0; indexk <= number - (index + 1); indexk++) {
      stringval += "*";
    }
    for (let indexl = 1; indexl <= number - (index + 1); indexl++) {
      stringval += "*";
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern7("*", 5));
