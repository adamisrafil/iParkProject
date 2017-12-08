function changeColor(color){
			var myselect = document.getElementById("spotSelction"),
			spot = myselect.options[myselect.selectedIndex].className;
			myselect.className = spot;
			document.spot.style.background-color = color;
		}

