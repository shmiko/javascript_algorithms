<<<<<<< HEAD
var calc = {
	status : 'OK',
	total: 0,
	plus: function(a,b){
		total = a + b;
		return (
			console.log(this),
			console.log('a+b is ', a+b),
			console.log('total is ', total),
			console.log('this.total is ', this.total),
			console.log('this.status ', this.status)
		)
	}
}

=======
var calc = {
	status : 'OK',
	total: 0,
	plus: function(a,b){
		total = a + b;
		return (
			console.log(this),
			console.log('a+b is ', a+b),
			console.log('total is ', total),
			console.log('this.total is ', this.total),
			console.log('this.status ', this.status)
		)
	}
}

>>>>>>> 332804c856ee168a6d2e4f87ca090c3555a18559
calc.plus(2,5);