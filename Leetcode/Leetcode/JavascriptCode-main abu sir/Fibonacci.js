	//Write a function fib() that takes an integer n and returns the series 
//up to nth Fibonacci number. 0, 1, 1, 2, 3, 5, 8

//A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding
// numbers.
//Fn = Fn-1 + Fn-2


function feb(n){
    let arr = new Array(n);
 arr[0]=0;
arr[1]=1;
console.log(arr);
for(let i =2;i <arr.length;i++){
    arr[i] = arr[i-1] +arr[i-2]
}
console.log(arr);
}
feb(10);
