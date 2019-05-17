Array.prototype.myfunction = function(name){
	name();
}; 
function name(){
	console.log("hello!");
}
myfunction("Fahad");