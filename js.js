var selP = document.querySelector("ul");
selP.style.color = "green";
var body = document.querySelector("body");
body.style.background = "yellow";

setInterval(function(){
	while(body.style.background === "yellow"){
		if(body.style.background === "yellow"){
			body.style.background = "black";
		}else{
			body.style.background = "yellow";
		}		
	}

}, 250)