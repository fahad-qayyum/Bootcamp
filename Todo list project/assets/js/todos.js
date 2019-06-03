$("ul").on("click", "li" , function(event){
	$(this).toggleClass("completed");
	event.stopPropagation();
});
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})
$("ul").on("click", ".delete" , function(event){
	$(this).parent().fadeOut(800, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		$("ul").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});