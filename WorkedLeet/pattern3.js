/* WAP Pattern Right Triangle Pattern in Javascript
    *
   **
  ***
 ****
*****

Matrix

            04
         13 14
      22 23 24
   31 32 33 34
40 41 42 43 44
*/

var pattern3 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj <= number - (index + 1); indexj++) {
      stringval += ` `;
    }
    for (let indexk = 0; indexk <= index; indexk++) {
      stringval += `*`;
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern3("*", 5));
