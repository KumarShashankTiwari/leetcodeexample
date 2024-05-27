let a='hello how are you?';

console.log('a_length',a.length) ;

// 1. concat();
// 2. charAt();  Provides index of that char in string;

console.log('a.charAt(5)',a.charAt(6));

// 3. indexOf(): Provides charahter on that index in string
//gives only first apperance of that char;

console.log('a.indexOf(5)',a.indexOf('o'));

// 4. indexOf(): Provides charahter on that index in string
//gives only last apperance of that char and start searching from last;

console.log('a.lastIndexOf(5)',a.lastIndexOf('o'));
// 5. lowe and upper case
console.log('toUpperCase',a.toUpperCase());
console.log('toLowerCase',a.toLowerCase());

//6. substring // end is not included
console.log('substring',a.substring(2,6));

//7. starts with ends with // end is not included
console.log('substring',a.startsWith('hello'));
console.log('substring',a.endsWith('you?'));

//8. split
console.log('substring',a.split(' '));

//9. trim
console.log('substring',a.trim());




