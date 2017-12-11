$(function() {
  var neededParkingRows = 21;
  var neededParkingColumns = 3;

  //creating left side of page parking lot
  var leftLotSpots = 0;
  $("#leftLot.left_lot_container").css({
    "grid-template-columns": "repeat(" + (neededParkingColumns - 1) + ", 1fr)",
    "grid-template-rows": "repeat(" + (neededParkingRows - 1) + ", 3fr)"
  });
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
    //e.preventDefault();
    var dataFromSignUpForm = $("#signUpForm :input").serializeArray();
    console.log(dataFromSignUpForm);

    var firstName = $('#signUpFormFirstName').val();
    var lastName = $('#signUpFormLastName').val();
    var spotSelection = $('#signUpFormSpotSelection').val();

    console.log(firstName + " " + lastName + " " + spotSelection);

    //find the gird element corresponding to spotSelection
    var idSpotSelection = '#' + spotSelection;
    console.log(idSpotSelection);
    var spot4 = $(idSpotSelection);
    console.log(spot4);
    //change from empty to taken
    if ($(idSpotSelection).hasClass('taken')) {
      alert("That spot is taken");
    } else {
      $(idSpotSelection).removeClass('empty').addClass('taken');
      //$.post( "info.php", $( "#signUpForm" ).serialize() );
    }
  });
});
