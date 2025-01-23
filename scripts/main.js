function themeSwitch() {
	let themeButton = document.getElementById("themeButton");
	let body = document.getElementById("body");
	if(themeButton.innerHTML === "Switch to Dark Mode"){
		themeButton.innerHTML = "Switch To Default Mode";
	}
	else{
		themeButton.innerHTML = "Switch to Dark Mode";
	}
	body.classList.toggle("darkMode");
}
function fontSwitch() {
	let fontButton = document.getElementById("fontButton");
	let body = document.getElementById("body");
	if(fontButton.innerHTML === "Switch to a More Readable Font"){
		fontButton.innerHTML = "Switch to Default Font";
	}
	else {
		fontButton.innerHTML = "Switch to a More Readable Font";
	}
	body.classList.toggle("accessibleMode");
}