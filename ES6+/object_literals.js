//If the Key and value is same , you need not specifiy the key
function addressMaker(city, state){

  const newAddress = {city: city, state: state};

  console.log(newAddress);
}

addressMaker('The Throne','Asgard');

//Challenge

function newMaker(address){
  /*const newAddress ={
    city: address.city,
    state: address.state,
    country: 'United States'
  };*/

  //Use template literal, destructuring to console newAddress

  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country : 'USA'
  };

  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

newMaker({city: 'Austin', state: 'Texas'});
