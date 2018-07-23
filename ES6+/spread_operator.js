let ex1 = [10,20,30,40];
let ex2 = [...ex1];

ex2.push('last_ele');
console.log(ex2);


let example = {
    firstName: 'Bruce'
};

let example2 ={
  ...example
};


console.log(example2);

let arr3 = [...ex1, ...ex2];
console.log(arr3);
