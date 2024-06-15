const users =[{"id":1,"Name":"Andriette Han","isActive":true,"age":20},
{"id":2,"Name":"Seamus Humby","isActive":false,"age":18},
{"id":3,"Name":"Reynard Jendricke","isActive":true,"age":19},
{"id":4,"Name":"Briny Linnit","isActive":false,"age":56},
{"id":5,"Name":"Ernestus Irlam","isActive":false,"age":35},
{"id":6,"Name":"Agathe Chatteris","isActive":true,"age":26},
{"id":7,"Name":"Haywood Whodcoat","isActive":true,"age":17},
{"id":8,"Name":"Dawna Berrey","isActive":true,"age":58},
{"id":9,"Name":"Myca Maber","isActive":true,"age":29},
{"id":10,"Name":"Prinz Linzey","isActive":true,"age":10}]


const newfilter= users.filter((item)=>item.isActive===true);
const ageaverage= users.reduce((accumulator,item)=>item.age+accumulator,0);

console.log(ageaverage/users.length);


