//the sum of all prime numbers that are less than or equal to num.
// it should give sum of all prime number upto given input number
//sumPrimes(10) should return 17.

function sumPrimes(num) {

    const primeNumberArray = []
    let sum =0;
// to find prime number between given number
for(let i = 2; i <=num; i++ ){

    flag = 0;
    for(let j = 2; j <= i;j++){
        if( i %j == 0 && i < j){
            flag =1;
          }
          else if(i %j == 0 && flag !=1){
//sum all prime number
            sum +=i;
  primeNumberArray.push(i);
          }
    }
}

return sum;
}

sumPrimes();

// 2nd solution

//given function check whether number is prime number or not
function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
}

// this function give sum
function sumOfPrimes(num) {
  let sum = 0;
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// Example usage
console.log(sumOfPrimes(10)); // Output: 17
