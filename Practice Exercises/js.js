var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var header = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var color = generateRandomColors(6);
var rightColor = pickRandom();
colorDisplay.textContent = rightColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	var color = generateRandomColors(3);
	var rightColor = pickRandom();
	colorDisplay.textContent = rightColor;
	for(var i = 0 ; i < square.length ;i++){
		if(color[i]){
			square[i].style.backgroundColor = color[i];
		}else{
			square[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	var color = generateRandomColors(6);
	var rightColor = pickRandom();
	colorDisplay.textContent = rightColor;
	for(var i = 0 ; i < square.length ;i++){
		
			square[i].style.backgroundColor = color[i];
		
			square[i].style.display = "block";
		
	}
});


reset.addEventListener("click", function(){
	reset.textContent = "New Colors";
	
	var color = generateRandomColors(6);
	var rightColor = pickRandom();
	message.textContent = "";
	colorDisplay.textContent = rightColor;
	for( var i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];}
	header.style.backgroundColor = "steelblue";	
});



	for( var i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor == rightColor){
				message.textContent = "Correct!";
				reset.textContent = "Play Again?";
				header.style.backgroundColor = rightColor;
				square.forEach(function(i){i.style.backgroundColor = rightColor});
			}else{
				message.textContent = "Try again!"
				this.style.backgroundColor = "#232323";
			}
		});
	}



function pickRandom(){
	var num =  Math.floor(Math.random() * color.length);
	return color[num];

}
 function generateRandomColors(num){
 	var array = new Array();
 	for(var i=0 ; i < num; i++){
 		array.push(makeColor());
 	}
 	return array;
 }
 function makeColor(){
 	/*for red color*/
 	var r = Math.floor(Math.random() * 256);
 	/*for green color*/
 	var g = Math.floor(Math.random() * 256);
 	/*for blue color*/
 	var b = Math.floor(Math.random() * 256);
 	var rgb = "rgb(" + r+ ", " + g + ", " + b + ")";
 	return rgb;  
 		
 }