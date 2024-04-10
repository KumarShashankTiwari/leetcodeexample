//https://www.youtube.com/watch?v=Tva4TH53ioU

// 1. print all N prime number ie from 0 to given number

function primeNumber(num) {
  const i = 2;
  const number = num;
  let flag = 0; // default value it is prime

  for (let i = 2; i <= number; i++) {
    flag = 0;
    for (let j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        flag = 1; // not prime number
        break;
      }
    }
    if (flag == 0) {
      // it is prime number
      console.log(i);
    }
  }
}

primeNumber(20);

//2 find the count of prime number between 1 to n

function PrimeNumberCount(num) {
  const i = 2;
  const number = num;
  let flag = 0; // default value it is prime
  let count = 0;

  for (let i = 2; i <= number; i++) {
    flag = 0;
    for (let j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        flag = 1; // not prime number
        break;
      }
    }
    if (flag == 0) {
      // it is prime number
      count++;
      //console.log(i);
    }
  }

  console.log(`Total prime number are : ${count}`);
}

PrimeNumberCount(20);

//3 Find First Nth PrimeNumbers (divisble by: 1 and themselves only e.g. 2,3,5,7,11)

function NthPrimeNumber(num) {
  const i = 2;
  const number = 100; // always set this number to greater than target number
  let flag = 0; // default value it is prime
  let count = 0;
  let target = num;

  for (let i = 2; i <= number; i++) {
    flag = 0;
    for (let j = 2; j < i - 1; j++) {
      if (i % j === 0) {
        flag = 1; // not prime number
        break;
      }
    }
    if (flag == 0) {
      // it is prime number
      count++;
      //console.log(i);
    }
    if (count === target) {
      console.log(`nth prime number is : ${i}`);
      break;
    }
  }
}

NthPrimeNumber(3);

//1,2,3,4,5

//

function prime(num) {
  const target = num;
  const Number = 100;
  let count = 0;
  for (let i = 2; i <= Number; i++) {
    let flag = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        flag = 1;
      } else if (i % j === 0 && flag != 1) {
        count++;
      }
    }
    if (target === count) {
      return i;
    }
  }
}

console.log(prime(4));
