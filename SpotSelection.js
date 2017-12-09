// .A1{
// 	border: 1px solid black;
// 	grid-row: 1/10;
// 	grid-column: 1/2;
// }
//NOTE FOR TOMORROW:
//grid-columns not being added as a css property
//Auto add grid based on needed values?

$(function() {
	//("#leftlot").css("display","grid");
	for (var parkingRows = 1; parkingRows < 11; parkingRows++) {
		console.log(parkingRows);
		for (var parkingColumns = 0; parkingColumns < 2; parkingColumns++) {
			console.log(parkingColumns);
		// https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery
		// var lotSpace = ('<div id="A' + i + '" class="A' + i + ' empty">A' + i + '</div>').html();
			var lotSpace = $('<div id="A' + parkingRows + '">A' + parkingRows + '</div>');
			lotSpace.css({"grid-row": parkingRows+"/10", "grid-column": parkingColumns+"/2"});
			lotSpace.addClass('spot empty');
			$("#leftLot").append(lotSpace);
			console.log(lotSpace);
		}
	}
	//https://stackoverflow.com/queastions
	$('#signUpForm').on('submit', function(e) {
		e.preventDefault();
		var dataFromSignUpForm = $("#signUpForm :input").serializeArray();
		console.log(dataFromSignUpForm);
		console.log("print test");

		var firstName = $('#signUpFormFirstName').val();
		var lastName = $('#signUpFormLastName').val();
		var spotSelection = $('#signUpFormSpotSelection').val();

		console.log(firstName + " " + lastName + " " + spotSelection);

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
		//tell it where to put it
				//what to put there
		//$("body").append('<div class="A10">Test grid</div>');
	});
});
