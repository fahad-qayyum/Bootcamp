var label1 = document.querySelector(".label1");
var label2 = document.querySelector(".label2");
var img = document.querySelector(".testimonialImg");
var quote = document.querySelector(".quote");
var title = document.querySelector(".title");
var subtitle = document.querySelector(".subtitle");


label2.addEventListener("click",function(){
	label2.style.backgroundColor = "#293347";
	label1.style.backgroundColor = "#8C43FF"
	title.textContent = "Dr. Aksam Iftikhar"
	subtitle.textContent = "Professor, COMSATS Institute Of Technology"
	img.setAttribute("src","img/aksam.jpg");
	quote.textContent = "\"Fahad demonstrated excellent abilities of professionalism to solve even complex problems. He has abilities to work under stress in a self-assured and motivated way. He is an exceptional, responsible and highly organized individual. I am very impressed with his innovative approach in solving out difficult tasks by consulting relevant literature.\"";
	
});
label1.addEventListener("click",function(){
	label1.style.backgroundColor = "#293347";
	label2.style.backgroundColor = "#8C43FF";
	title.textContent = "Jeff Edmonds"
	subtitle.textContent = "Sr. Professor, York University"
	img.setAttribute("src","img/jeff.jpg");
	quote.textContent = "\"Fahad Qayyum is a star student. Overall I see his marks are top. He took Advanced Algorithms (EECS3101) from me receiving an A+. This course is really hard. It requires during each of 4 tests and an exam to completely design new algorithms. Fahad did so exceptionally well. This course is an excellent indicator of how well a person will do in Google, graduate school, producing original software developer job. He is completely charming and a delight to interact with. He supported both the other students and myself by engaging us all in interesting discussions. I am confident that he will excel at anything he does. I 100% strongly recommend Fahad. I had wished that he would have chosen to do graduate work with me.\"";
	
});
