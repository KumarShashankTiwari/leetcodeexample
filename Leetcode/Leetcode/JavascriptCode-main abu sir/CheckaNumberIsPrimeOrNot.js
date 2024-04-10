
function checkPrimeNumber(num){
if(num ===1 ){
    return '1 is not prime number'
}
if(num === 2){
    return true;
}else{
    for(let i =2 ; i< num; i++){
        if(num % i === 0){
            return false;
        }
    }
}
return true;

}
//checkPrimeNumber(2);

const result = checkPrimeNumber(1);
console.log(result);