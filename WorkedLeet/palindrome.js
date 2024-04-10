let a='racecar';
const palindrome1 =(array)=>{
let indexvalue='';
let jindexvalue='';
for (let index = 1; index <=(array.length+1)/2 ; index++) {
    indexvalue=array[index];
}
for (let jindex = array.length; jindex >=(array.length+1)/2 ; jindex--) {
    jindexvalue=array[jindex];  
}
if(indexvalue===jindexvalue)
{
    return true;
}
else{
    return false;
}

}

 const answer = palindrome1(a);
 console.log("answer",answer);

 let b='racecars';
 const palindrome2 =(array)=>{
    let indexvalue='';
    let jindexvalue='';
    for (let index = 0; index <(array.length+1)/2 ; index++) {
        indexvalue=array[index];
        if(array[index] === array[array.length-1-index] ){
            return true;
        }
        else{
            return false;
        }
    }
    
    if(indexvalue===jindexvalue)
    {
        return true;
    }
    else{
        return false;
    }
    }

    const answer2 = palindrome2(b);
    console.log("answer 2",answer2);