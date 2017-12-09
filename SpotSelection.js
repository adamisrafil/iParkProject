/*
form.onsubmit = function(){
	//change class tag from empty to taken

	//create random number for use to identify

}
*/
$(function() {
	$('#signUpForm').on('submit', function(e) {
		e.preventDefault();
		var dataFromSignUpForm = $("#signUpForm :input").serializeArray();
		console.log(dataFromSignUpForm);
		console.log("print test")

		var firstName = $('#signUpFormFirstName').val();
		var lastName = $('#signUpFormLastName').val();
		var spotSelection = $('#signUpFormSpotSelection').val();

		console.log(firstName + lastName + spotSelection);

		//find the gird element corresponding to spotSelection
		var spot = $('#A1');
		var spot2 = $('#B7');
		var spot3 = $('#C7');
		console.log(spot);
		console.log(spot2);
		console.log(spot3);
		var idSpotSelection = '#' + spotSelection;
		console.log(idSpotSelection);
		var spot4 = $(idSpotSelection);
		console.log(spot4);
		//change from empty to taken
		if($(idSpotSelection).hasClass('taken')){
			alert("That spot is taken");
		}
		else {
			$(idSpotSelection).removeClass('empty').addClass('taken');
		}
		//find out how to add one extra element to that grid
		$("body").append("<p>Test</p>");
		//tell it where to put it
				//what to put there
		$("#leftLot").append('<div class="A10">Test grid</div>');
		//$("body").append('<div class="A10">Test grid</div>');
	});
});
