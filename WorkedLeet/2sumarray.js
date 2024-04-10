// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// let nums = [2,7,11,15];
// let target = 26

let nums = [2,5,5,11];
let target = 10


 const  twoSum = (nums, target) => {
    for(index=0; index<nums.length;index++){
    for(jindex=0; jindex<nums.length;jindex++){
   if(nums[index]+nums[jindex]===target && index!==jindex){
   return [index,jindex]
   }
   }
   }
};
const answer = twoSum(nums,target);
console.log(answer);
