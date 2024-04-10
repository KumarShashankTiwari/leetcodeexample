/* WAP Pattern Hollow Triangle Star Pattern

*
**
* *
*  *
******

00
10 11
20    22
30       33
40 41 42 43 44



*/

var pattern6 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj <= index; indexj++) {
      if (index === indexj || index === number - 1 || indexj === 0) {
        stringval += "*";
      } else {
        stringval += " ";
      }
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern6("*", 5));
