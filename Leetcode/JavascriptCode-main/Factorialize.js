//Factorialize a Number
//4!= 1x2x3x4

function Factorialize (num){
let factorial =1;
for(let i=1; i <=num;i++){
    factorial *= i;
}
return factorial;
}

console.log(Factorialize(4));
