let xTurn = true;
function changeMark(buttonId) {
	let currentMark = document.getElementById(buttonId).innerHTML;
	let currentButton = document.getElementById(buttonId);
	if (!currentMark) { 
		if (xTurn) {
			document.getElementById(buttonId).innerHTML = "X";
			currentButton.classList.toggle("X");
		}
		else {
			document.getElementById(buttonId).innerHTML = "O";
			currentButton.classList.toggle("O");
		}
		xTurn = !xTurn; 
		checkWin(); 
	}
}
function resetGame() {
	document.getElementById("a1").innerHTML = ""; 
	document.getElementById("a1").classList.remove("X","O");

	document.getElementById("b1").innerHTML = ""; 
	document.getElementById("b1").classList.remove("X","O");
	
	document.getElementById("c1").innerHTML = "";
	document.getElementById("c1").classList.remove("X","O");
	
	document.getElementById("a2").innerHTML = ""; 
	document.getElementById("a2").classList.remove("X","O");
	
	document.getElementById("b2").innerHTML = ""; 
	document.getElementById("b2").classList.remove("X","O");
	
	document.getElementById("c2").innerHTML = ""; 
	document.getElementById("c2").classList.remove("X","O");
	
	document.getElementById("a3").innerHTML = "";
	document.getElementById("a3").classList.remove("X","O"); 
	
	document.getElementById("b3").innerHTML = ""; 
	document.getElementById("b3").classList.remove("X","O");
	
	document.getElementById("c3").innerHTML = ""; 
	document.getElementById("c3").classList.remove("X","O");
	
	document.getElementById("winDisplay").innerHTML = "";
	
	xTurn = true;
} 
function checkWin() {
	let a1 = document.getElementById("a1").innerHTML; 
	let b1 = document.getElementById("b1").innerHTML; 
	let c1 = document.getElementById("c1").innerHTML; 
	let a2 = document.getElementById("a2").innerHTML;
	let b2 = document.getElementById("b2").innerHTML;
	let c2 = document.getElementById("c2").innerHTML;
	let a3 = document.getElementById("a3").innerHTML;
	let b3 = document.getElementById("b3").innerHTML;
	let c3 = document.getElementById("c3").innerHTML;
	//X Wins
		//Horizontal
		if (a1 == b1 && b1 == c1 && a1 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		if (a2 == b2 && b2 == c2 && a2 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		if (a3 == b3 && b3 == c3 && a3 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		//Vertical
		if(a1 == a2 && a2 == a3 && a1 == "X"){
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		if (b1 == b2 && b2 == b3 && b1 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		if (c1 == c2 && c2 == c3 && c1 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		//Diagonal
		if (a3 == b2 && b2 == c1 && a3 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
		if (a1 == b2 && b2 == c3 && a1 == "X") {
			document.getElementById("winDisplay").innerHTML = "X Wins";
		}
	//O Wins
		//Horizontal
		if (a1 == b1 && b1 == c1 && a1 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		if (a2 == b2 && b2 == c2 && a2 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		if (a3 == b3 && b3 == c3 && a3 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		//Vertical
		if (a1 == a2 && a2 == a3 && a1 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		if (b1 == b2 && b2 == b3 && b1 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		if (c1 == c2 && c2 == c3 && c1 == "O") {
				document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		//Diagonal
		if (a3 == b2 && b2 == c1 && a3 == "O") {
			document.getElementById("winDisplay").innerHTML = "O Wins";
		}
		if (a1 == b2 && b2 == c3 && a1 == "O") {
			document.getElementById("winDisplay").innerHTML = "O Wins";
		}
}