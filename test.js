var add = function(a,b){
	return a + b;
	}

	console.log(add(4,3));
	var str  = "i'm a lasagna hog".split("").reverse().join("");
	console.log(str);


// var foo = "Hello";
// (function() {
//   var bar = " World";
//   console.log(foo + bar);
// })();
// console.log(foo + bar);

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

var foo = {n: 1};
console.log(foo);
var bar = foo;
console.log(bar);
foo.x = foo = {n: 2};
console.log(foo.x);

//make this work
//add(2)(3);

var add = function(x){
	return function(y){
		return x + y;
	}
}

console.log(add(2)(3));

// Initialize a string variable for the output
var output = '';

// Count to 100 using i as the counter
for (var i = 1; i <= 100; i++) {

    // If i is divisible by 3 with no remainder, append Fizz
    if (i % 3 === 0) {
        output += 'Fizz ';
    }

    // If i is divisible by 5 with no remainder, append Buzz
    if (i % 5 === 0) {
        output += 'Buzz ';
    }

    // If i is not divisible by 3 or 5, append the number itself.
    // Note: JavaScript evaluates non-zero numbers as true:
    // so, if both divisors yield a remainder, the expression is true.
    if (i % 3 && i % 5) {
        output += i + ' ';
    }
}

// Print the output to the console
console.log(output);

var o='';
for (var i=1; i<=100; i++) {
    i%3 || (o+='Fizz ');
    i%5 || (o+='Buzz ');
    !(i%3 && i%5) || (o+=(i+' '));
}
console.log(o);


var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length);

var foo = 10 + '20';
console.log(foo);

function spacify(str) {
  return str.split('').join(' ');
}

console.log("first ",spacify("logo"));

function spaceyfi(str){
	var retStr;
	for (var i = 0; i < str.length; i++){
		console.log("second i ",str[i]);
		retStr =+ str[i] + " ";
	}
	console.log("second result ",retStr);
	return retStr;
}
console.log("second ",spaceyfi("logo"));
