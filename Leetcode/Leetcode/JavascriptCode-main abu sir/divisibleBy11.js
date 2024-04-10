/*
Given a list if integers, determine how many of them are
divisible by 11. If you encounter an integer in the list
that is greater than or equal to 111,return 0 regradless of how many number are divisible by 11.

Notes that 0 is divisible by 11
*/

function divisible_by_11 (arr){
let result =[];

  for(let element of arr){
      
if(element >=111){
  return 0
}

    if(element%11 ===0 || element ==0){
result.push(element);
    }
  }
return result;

}
divisible_by_11([0,22,44,2]);
