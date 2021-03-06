// Each new term in the Fibonacci sequence is generated by adding the 
// previous two terms. By starting with 1 and 2, the first 10 terms will 
// be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not 
// exceed four million, find the sum of the even-valued terms.

var x = 1;
var y = 2;
var z = 0;
var totalEvens = 0;

console.log(x);
while(x < 4000000){
    if(x % 2 === 0){
		totalEvens += x;
	}
    if(y < 4000000){
        console.log(y);     
    }	
	z = x + y;
	x = y;
	y = z;
}

console.log("Sum total of evens: " + totalEvens);