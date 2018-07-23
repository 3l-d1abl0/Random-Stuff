let income = [100, 200, 300];
let sum =0;

//Loops over iterable Objects like array, strings, objects
for(const inc of income){
    console.log(inc)
    sum += inc;
}

console.log(sum);

let lyrics = 'Pain, you made me a believer';

for (const ch of lyrics){
  console.log(ch);
}

//anything that is iterable can be used if For Of Loop
