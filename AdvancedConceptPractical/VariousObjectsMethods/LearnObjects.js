// Objects is a collection of related data type
// itstores data in form of key and value
//In same objects we can store diffreent tyes of values

// let user= {};
// let member= new Object();

// console.log(user);
// console.log(member);
// user.name= 'yes';
// member.name='no'

// console.log(user);
// console.log(member);

let key= 'address';
let phone=1212;
const user={
    name:'peter',
    age:25,
    isDevloper:true,
    getData:function(){return this.city},
    inner:{name:'inner'},
    ['pin code']:22440003,
    [key]:'colony 21, alpha gaye',
    phone
}
user.name='Anil'
delete user.inner;
user.city='new york'
console.log("user",user);

console.log("city" in user);

for(item in user){
    console.log(`${item} is key and value is ${user[item]}`);
}
//how to find sum from values in object
const emp={
    'emp1':1000,
    'emp2':2000,
    'emp3':3000,
    'emp4':4000
}
let sum=0;
for(item in emp){
 sum = sum + emp[item];
}
console.log('sum : ', sum);