/*  find palindrome or not */

/*madam*/
/* True*/

const checkPalindrome = (val) => {
  console.log("Provided Value", val);
  let temp = "";
  const len = val.length;
  //   let stringValue = val.toSting();
  for (let index = 0; index < len / 2; index++) {
    if (val[index] !== val[len - 1 - index]) {
      console.log(
        `At len ${val[index]} and last digits ${val[len - 1 - index]}`
      );
      console.log("Not Palindrome");
      return;
    }
  }
  return console.log(`${val} is Palindrome`);
};

let val = "madam";
checkPalindrome(val);
