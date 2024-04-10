//Find the next palindrome number
//A string is a palindrome if it is read the same from forward or backward

//Basically, the approach will be, we divide the number into two halves 
//(w.r.t. its length) and return the new number which is just the first half concatenated twice.




    const findNearestPalindrome = (num) => {
        
        const strNum = String(num);
        
        const half = strNum.substring(0, Math.floor(strNum.length/2));
        
        const reversed = half.split("").reverse().join("");
        
        const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
        Math.ceil(strNum.length/2))
        const results =  +(first+reversed);
       
        return results;
        //console.log(result);
     };

findNearestPalindrome (996);


