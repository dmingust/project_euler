//If we list all the natural numbers below 10 that are multiples of 
//3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var xThrees = 0;
var xFives = 0;
var total = 0;

for (i = 0; i < 1000; i++){
    if(i % 3 === 0){
        xThrees = i; 
        console.log("Threes = " + xThrees);
        total += xThrees;
    }    
    if(i % 5 === 0) {
        xFives = i;
        console.log("Fives = " + xFives);
        total += xFives;
    }
}
console.log("Total = " + total);