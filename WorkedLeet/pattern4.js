/* WAP Pattern Hollow Square Pattern

*****
*   *
*   *
*   *
*****

*/

var pattern4 = function (val, number) {
  let stringval = "";

  for (let index = 0; index < number; index++) {
    for (let indexj = 0; indexj < number; indexj++) {
      if (index === 0 || index === number - 1) {
        stringval += `*`;
      } else {
        if (indexj === 0 || indexj === number - 1) {
          stringval += `*`;
        } else {
          stringval += ` `;
        }
      }
    }
    stringval += "\n";
  }
  return stringval;
};
console.log(pattern4("*", 5));
