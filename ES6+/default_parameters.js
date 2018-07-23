//function add(...numArray){
function add(numArray=[]){

  let total =0;
  numArray.forEach((ele) => {
    total +=ele;
  });
  console.log(total);
}

add();
