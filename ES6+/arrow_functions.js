function add(...nums){

  /*let total = nums.reduce(function(x,y){
    return x+y;
  });*/
  //function can ber replaced by =>
  //but that does not have its instance of this

  /*let total = nums.reduce((x,y)=>{
    return x+y;
  });*/

  let total = nums.reduce((x,y)=> x+y);

  console.log(total);
}

add(4,5,6,7,8,9);
