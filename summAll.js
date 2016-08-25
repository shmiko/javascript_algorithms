function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}


function sumAll2(arr) {
	var total = 0;
	var i = 0;
	var sortedArray = [];
	var currNum =  0;
	for (i = getMinOfArray(arr); i <= getMaxOfArray(arr); i++){
		currNum = i;
		total = total + currNum;
		console.log(total);
	};
	console.log("Grand Total is",total);
	return total;
}

sumAll2([1, 4]);


console.log('2nd total is ', sumAll2([4,1]));

var checkSum = sumAll2([5,10]);
console.log('3rd total is ', checkSum);

