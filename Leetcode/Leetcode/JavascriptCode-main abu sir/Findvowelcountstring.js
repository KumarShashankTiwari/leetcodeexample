/*
Find vowel count in a string - 'a', 'e', 'i', 'o', 'u'
  Input 1 - DAMCO SOLUTIONS.
Input 2 – ANTHONY

*/

function getCount(str){
  const InputStr = str.toLowerCase();
  var vowelsCount =0;
  const vowels=['a','e','i','o','u'];
  for(let char of InputStr){
    if(vowels.includes(char)){
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount('DAMCO SOLUTIONS'));



// how to count number of vowal in string

const vowelCount = str => {
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    let count = result.length;
  
    console.log(count);
  };
