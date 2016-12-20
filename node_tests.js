for (var i = 0;i < 12; i++){
	setInterval(function() {
		console.log("foo", i);
		//while (true) {console.log("still foo");}
	}, 1000);
	setInterval(function() {
		console.log("bar", i);
	}, 1000);
	i++;
}

var fs = require("fs");
fs.readFile("foo.txt", "utf8", function(error, data) {
if (error) {
	throw error;
}
	console.log(data);
});
console.log("Reading file...");