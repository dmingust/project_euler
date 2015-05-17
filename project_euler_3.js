//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

// Solution copied from 
// https://github.com/mattphoto/ProjectEuler/blob/master/euler3.js

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

var daNumber = 13195; //600851475143

for (var j=2; j < daNumber; j++){
  if (daNumber % j === 0 && isPrime(j)){
    x = j;
    console.log("x = " + j);
  }
}

console.log(x);