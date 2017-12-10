
 function myFunction(){
	 var fname=document.getElementById('firstname').value;
	 var lname = document.getElementById('lastname').value;
	 var pnumber = document.getElementById('phone').value;
	 if (fname == null || fname == ""|| lname == null || lname == ""|| pnumber == null || pnumber == "") {
        alert( "please enter your information");
    } 
	else{
		if (confirm( " Are informations match? \nYour Name is " + fname +" "+ lname+ "\nYour Phone Number is " + pnumber)){
			alert("You are set");
			}
			else{
			alert("please retype your information");
	}
 }
 }