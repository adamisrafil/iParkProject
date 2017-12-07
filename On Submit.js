function changeColor(){
	var myselect = document.getElementById("spotSelction"),
	colour = myselect.options[myselect.selectedIndex].className;
	myselect.className = colour;
}

