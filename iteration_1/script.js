$(document).ready(function(){

	//append new element
	for (i = 0; i < 100; i++){
		$("body").append('<div class="element" style="transform:rotate(' + i*5 + 'deg);"></div>');
		console.log("element " + i + " added");
}



	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','#ff0099');
	})
	//	$('.element').mouseout(function(){
	//	$(this).css('background-color','#ffffff');
	//})
})