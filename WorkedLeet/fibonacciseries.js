let fib=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let fib2=[ 2, 3, 5, 8, 13, 21, 35];
const fibonacciseries =(val)=>{

console.log(val);
for (let index = 2; index < val.length; index++) {
    if((val[index-2]+val[index-1]) != val[index])
    {
        return false;
    }
  
} 
    return true;

}

 const answer = fibonacciseries(fib);
 console.log("answer",answer);