//Template literals allows us to use string more beautifully
//1. Get rid of + and New Line
//Use back Ticks (``)

let num1 = 1;
let num2 = 2;
let fname = 'Bruce';
let lname = 'Banner';

const fullName = `${num1+num2}. ${fname} ${lname}`;
console.log(fullName);

//No need for new-line character

//let salutation = 'Hello, \nI am '+fname+' '+lname;
let salutation = `Hello,
I am ${fname} ${lname}`;

console.log(salutation);
