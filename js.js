var item = document.querySelectorAll("li");;
for(var i =0 ; i< item.length; i++){
	item[i].addEventListener("mouseover", fun);
	item[i].addEventListener("mouseout", fun);

}
function fun(){
	this.classList.toggle("do");
}
