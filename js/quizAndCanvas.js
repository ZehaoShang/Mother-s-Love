//DOM System Ready
$(document).ready(function() {

	//Get element with id quiz and wait  the user submit the form
	$('#quiz').on("submit", function(event) {
		event.preventDefault();

		// I check if the answer is true
		if($('#my_question input:checked').val() === 'true') {
			//Hidden element slideToggle
			$("#down2").slideToggle("slow");

			//get the canvas element
			var canvas = document.getElementById("canvas");

			//get the 2d context 
			var ctx = canvas.getContext("2d");

			//Canvas height equal to width
			canvas.height = canvas.width;

			//put canvas text in bottom
			var textY = canvas.height;

			// Main loop for drawing 
			function draw() {
				canvas.height = canvas.width;
				ctx.font = "20px 黑体";
				ctx.fillStyle = "white";
				ctx.fillText("Special thanks to all mothers！", 0, textY);
				textY -= 0.4;

				//remove canvas if finish 
				if(textY < 0) {
					$('#canvas').remove();
				}
			}

			setInterval(draw, 50);
		}
		
		//answer value is wrong
		else {
			alert("I feel disppointed about get your answer.You must chose the wrong");//warning windos
		}
	});
});