var times = 0;
var interval = setInterval(function(){
	console.log("1st function!");
	if (times == 5) {
		clearInterval(interval);
	times = times + 1
	 setInterval(function(){
	   console.log("2nd function!");
	},500);
	}
},1000);