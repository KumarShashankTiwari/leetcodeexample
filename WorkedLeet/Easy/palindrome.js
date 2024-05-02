/*  find palindrome or not */

/*madam*/
/* True*/

var isPalindrome = function(val) {
  let x=val.toString();
  for(let i=0;i<x.toString().length/2;i++){
      if(x[i]!==x[(x.toString().length-1)-i]){
          return false
      }
  }
  return true;
}

let val = "madam";
// checkPalindrome(val);

let ans = isPalindrome(10);

console.log("answer",ans);