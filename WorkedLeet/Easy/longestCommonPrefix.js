// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    let mmm='';
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i-1].length; j++) {         
            if(strs[i][j]===strs[i-1][j]) {
            mmm === strs[i][j];
            }
           
       
        }
        
    }
     return mmm;
};
let strs = ["flower","flow","flight"]
const answer=longestCommonPrefix(strs);
console.log("answer",answer);