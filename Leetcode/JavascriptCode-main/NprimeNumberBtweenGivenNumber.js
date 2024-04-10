//print all Prime Numbers Between 1 to N

function checkPrimeNumber(num){
if(num ===1 || num ===0){
    return false;
}
    for(let i =2;i<num;i++){
        if(num%i ===0){
            return false;
        }
    }
    return true;
}

function prime(n){

    for(let j =1; j<=n;j++){
        if(checkPrimeNumber(j)){
            console.log(j)
        }
    }
}

console.log(prime(3));

// 2nd method


    function prime(n){
        if(n ===1 || n === 0){
            return false;
        }

        for(let j =1; j<=n;j++){
            let flag =0;
            for(let i = 2; i <=j;i++){
                if(j%i===0 && i <j){
                    flag=1 // not a prime number
                } else if (j%i===0 && !flag==1){
                console.log(j);
                }
            }
        }
    }

console.log(prime(5));
