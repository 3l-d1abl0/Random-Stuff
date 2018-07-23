//elements declared with var is hoisted to top
/*var
if(true){
  var example = 10;
}
console.log(example);
*/
/*
  var example;
  if(fasle){
    examle = 5;
}
*/

//let
/*
if(false){
  let example = 10;
}
console.log(example); //not defined
*/

const ex = 13;  //not to be changed
console.log(ex);
//ex =10; cant reassign

const exx = [];
exx.push(14);
console.log(exx);
//exx = [12,23]; cant reassign

const exxx = {};
exxx.topic ='const';
console.log(exxx);
exxx.topic = 'let';
/*exxx = {
  topic: 'let'
};*/

console.log(exxx);
