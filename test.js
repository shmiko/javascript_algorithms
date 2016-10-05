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

var o='';
for (var i=1; i<=100; i++) {
    i%3 || (o+='Fizz ');
    i%5 || (o+='Buzz ');
    !(i%3 && i%5) || (o+=(i+' '));
}
console.log(o);
