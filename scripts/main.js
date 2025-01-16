let darkTheme = "Switch to Default Mode";
let defaultTheme = "Switch to Dark Mode";

let accessibleFont = "Switch to Default Font";
let defaultFont = "Switch to a More Readable Font";

document.addEventListener('DOMContentLoaded', (event) => {
const themeButton = document.getElementById('themeButton');
const fontButton = document.getElementById('fontButton');
	themeButton.addEventListener("click", function(){
		if (themeButton.themeTextContent === defaultTheme){
			themeButton.themeTextContent = "Switch to Default Mode";
			document.body.classList.toggle("darkMode");
		}
		else {
			themeButton.themeTextContent = "Switch to Dark Mode";
			document.body.classList.toggle("darkMode");
		}
	})
	fontButton.addEventListener("click", function(){
		if(fontButton.fontTextContent === defaultFont){
			fontButton.fontTextContent = "Switch to Default Font";
			document.body.classList.toggle("accessibleMode");
		}
		else{
			fontButton.fontTextContent = "Switch to a More Readable Font";
			document.body.classList.toggle("accessibleMode");
		}
	})
	});
