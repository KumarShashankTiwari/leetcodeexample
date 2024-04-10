// Reverse the string or word

const str="abcd";

function foo(str){
    if(str.length <2){
        return str;
    }
    
    return foo(str.slice(1)) + str[0];
}
const result = foo(str);
console.log(result);