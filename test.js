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

// function spaceyfi(str){
// 	var retStr;
// 	for (var i = 0; i < str.length; i++){
// 		console.log("second i ",str[i]);
// 		retStr = str[i] + " ";
// 	}
// 	console.log("second result ",retStr);
// 	return retStr;
// }
// console.log("second ",spaceyfi("logo"));


String.prototype.spacify2 = function(){
  return this.split('').join(' ');
};

console.log('hello world'.spacify2());


function log(){
  console.log.apply(console, arguments);
};

log('gday', 'world');



var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
				var result = recursive(n - 1) + recursive(n - 2);
				console.log('result is ',result);
        return result;
    }
};

console.log(recursive(6));


var sumFibs = function sumFibs(num) {
var n = [1, 1];
while (n[n.length-1] + n[n.length-2] <= num) {
n.push(n[n.length-1] + n[n.length-2]);
}
console.log(n);
return n
};

console.log(sumFibs(4));


var stack = {};
function fib(n){
  if (n>1)
    return stack[n] || ( stack[n] = fib(n-1)+fib(n-2) );
  return n;
}

console.log(fib(44));


var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}


fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10)


function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
//Think of it like this.
/*
   fibonacci(4)   .--------> 2 + 1 = 3
      |          /               |
      --> fibonacci(3) + fibonacci(2)
            |    ^
            |    ----------- 2 = 1 + 1 <----------.
1st step -> |                     ^                |
            |                     |                |
            '---->  fibonacci(2) -' + fibonacci(1)-
*/

var fib = [0, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fin[i-1];
}
console.log(fib);

function fib(n, undefined){
    if(fib.cache[n] === undefined){
        fib.cache[n] = fib(n-1) + fib(n-2);
    }

    return fib.cache[n];
}
fib.cache = [0, 1, 1];
