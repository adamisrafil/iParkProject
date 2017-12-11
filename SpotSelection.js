$(function() { //document ready this scipt runs
	// How large is each level meant to be
	var neededParkingRows = 21;
	var neededParkingColumns = 3;

	//creating left side of page parking lot
	var leftLotSpots = 0;
	$("#leftLot.left_lot_container").css({
	    "grid-template-columns": "repeat(" + (neededParkingColumns - 1) + ", 1fr)",
	    "grid-template-rows": "repeat(" + (neededParkingRows - 1) + ", 3fr)"
	});

	// Filling up the parking lot grid
	for (var parkingRows = 1; parkingRows < neededParkingRows; parkingRows++) {
	    console.log(parkingRows);

	    for (var parkingColumns = 1; parkingColumns < neededParkingColumns; parkingColumns++) {
	    	console.log(parkingColumns);
	    	leftLotSpots++;
	    	console.log(leftLotSpots);
	     	// https://stackoverflow.com/questions/10619445/the-preferred-way-of-creating-a-new-element-with-jquery
	     	var lotSpace = $('<div id="A' + leftLotSpots + '">A' + leftLotSpots + '</div>');
	     	lotSpace.addClass('spot empty');
	     	$("#leftLot").append(lotSpace);
	     	$("#signUpFormSpotSelection").append('<option id="spotOptionA' + leftLotSpots + '"  value="A' + leftLotSpots + '">A' + leftLotSpots + '</div>');
	      	console.log(lotSpace);
	    }
	}

	//creating right side of page parking lot
	var rightLotSpots = 0;
	$("#rightLot.right_lot_container").css({
	    "grid-template-columns": "repeat(" + (neededParkingColumns - 1) + ", 1fr)",
	    "grid-template-rows": "repeat(" + (neededParkingRows - 1) + ", 3fr)"
	  });

	for (var parkingRows = 1; parkingRows < neededParkingRows; parkingRows++) {
		console.log(parkingRows);

	    for (var parkingColumns = 1; parkingColumns < neededParkingColumns; parkingColumns++) {
	    	console.log(parkingColumns);
	        rightLotSpots++;
	        var lotSpace = $('<div id="B' + rightLotSpots + '">B' + rightLotSpots + '</div>');
	        lotSpace.addClass('spot empty');
	        $("#rightLot").append(lotSpace);
	        $("#signUpFormSpotSelection").append('<option id="spotOptionB' + rightLotSpots + '"  value="B' + rightLotSpots + '">B' + rightLotSpots + '</div>');
	        console.log(lotSpace);
	    }
	}

	//using the form data on submission to send data to db and change class tag
	$('#signUpForm').on('submit', function(e) {
	    e.preventDefault();

	    var firstName = $('#signUpFormFirstName').val();
	    var lastName = $('#signUpFormLastName').val();
	    var spotSelection = $('#signUpFormSpotSelection').val();

	    console.log(firstName + " " + lastName + " " + spotSelection);

	    var idSpotSelection = '#' + spotSelection;
	    console.log(idSpotSelection);

	    if ($(idSpotSelection).hasClass('taken')) {
	    	alert("That spot is taken, please select another");
	    } else {
	    	//change the spot class to be taken
	    	$(idSpotSelection).removeClass('empty').addClass('taken');
		    //send form data to DB
		    //original post command BUT WE CAN DO BETTER!!!
		    //$.post("SpotSelection.php", $("#signUpForm").serialize());

		    //https://stackoverflow.com/questions/5004233/jquery-ajax-post-example-with-php
		    var request = $.ajax({						//ajax is an asychronise call funtion in jquery, executes without hearing back from the Backend/DB that it worked, but we don't know when we'll hear back
		        url: "SpotSelection.php",				//what is the needed backend script
		        type: "post",							//what is this call doing
		        data: $("#signUpForm").serialize()		//put signup form data into a serialze array, sends valid JSON
		    });

		    // Callback handler that will be called on success
		    request.done(function (response, textStatus, jqXHR){
		        // Tell user they have the spot
		        alert("Congrats, your spot has been reserved and we have stored your information");
		    });

		    // Callback handler that will be called on failure
		    request.fail(function (jqXHR, textStatus, errorThrown){
		        // Log the error to the console
		        console.error("The following error occurred: " + textStatus, errorThrown);
		        // Tell the user server error occured
		        alert("Due to an error, your spot could not be reserved");
		    });

		    // Callback handler that will be called regardless
		    // if the request failed or succeeded
		    request.always(function () {
		        console.log("Request finished");
   	 		});
	    }
  	});
});