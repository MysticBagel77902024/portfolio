function darkMode(){
	document.body.classList.toggle("darkMode");
	document.getElementById('darkButton').innerHTML = "Dark Mode Activated";
}
function defaultMode(){
	document.body.classList.toggle("body");
	document.getElementById('defaultButton').innerHTML="Switch to Light Mode";
}