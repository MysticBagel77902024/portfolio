let darkModeText = "Switch to Default Mode";
let defaultModeText = "Switch to Dark Mode";
let textContent = "Switch to Dark Mode";

document.addEventListener('DOMContentLoaded', (event) => {
const button = document.getElementById('darkButton');
	button.addEventListener("click", function(){
	//let textContent = "Switch to Dark Mode";
		if (button.textContent === defaultModeText){
			button.textContent = darkModeText;
			document.body.classList.toggle("darkMode");
		}
		else {
			button.textContent = defaultModeText;
			document.body.classList.toggle("darkMode");
		}
	})
	});

