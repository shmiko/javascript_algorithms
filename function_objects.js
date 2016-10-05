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

calc.plus(2,5);