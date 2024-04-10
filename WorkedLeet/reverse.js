let a='Jai shree ram';
const reverse =(val)=>{
let ans='';
for (let index = val.length; index >= 1; index--) {
 ans = ans+val[index-1];  
}
return ans;
}

 const answer = reverse(a);
 console.log("answer",answer);