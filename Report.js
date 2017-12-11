
 function myFunction(){
 	 var fname=document.getElementById('firstname').value;
	 var lname = document.getElementById('lastname').value;
 	 var myspot = document.getElementById('myspot').value;
	 if (fname == null || fname == ""|| lname == null || lname == ""||  myspot== null || myspot == "") {
        alert( "please enter your information");
      } 
  	else{
  		if (confirm( " Are informations match? \nYour Name is " + fname +" "+ lname+ "\nYour Spot is " + myspot)){
  			alert("You are set");
			 window.location.href="HomePage.html";
  			}
  			else{
  			alert("please retype your information");
  	}
   }
   } 