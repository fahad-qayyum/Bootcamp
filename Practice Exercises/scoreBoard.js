var h1 = document.getElementsByClassName("header")[0];
var p1Btn = document.getElementById("btn1");
var p2Btn = document.getElementById("btn2");
var reset = document.getElementById("reset");
var input = document.querySelector("input");
var times = document.getElementsByClassName("times")[0];
var p1Score = 0;
var p2Score = 0;


p1Btn.addEventListener( "click" , changeScoreP1);
p2Btn.addEventListener( "click" , changeScoreP2);
reset.addEventListener("click", resetProgress);
input.addEventListener("change", updateTimes);

function resetProgress(){
	p1Score = 0;
	p2Score = 0;
	h1.textContent = "0 to 0";
	input.value = 0;
	times.textContent = 0;
	h1.classList.toggle("colorChange");
}
function changeScoreP1(){
	if(p1Score < input.value && p2Score < input.value){
		p1Score = p1Score + 1;
		if (p1Score == input.value) {
		h1.classList.toggle("colorChange");
		h1.textContent = "Player one won! Reset to play again"
		}else{
			h1.textContent = p1Score + " to " + p2Score;	
		}		
	}
}
function changeScoreP2(){
	if(p1Score < input.value && p2Score < input.value){
		p2Score = p2Score + 1;
		if (p2Score == input.value) {
			h1.classList.toggle("colorChange");
			h1.textContent = "Player two won! Reset to play again"
		}else{
		h1.textContent = p1Score + " to " + p2Score;			
		}
	}
}

function updateTimes(){
	times.textContent = input.value;
}