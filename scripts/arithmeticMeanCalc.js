let dataInput;
let dataset = [];
let valueAdded;
let valueRemoved;
document.addEventListener("DOMContentLoaded", () =>{dataInput = document.getElementById("dataEntry").value;});

function updateValue(){
	if(dataInput !== undefined){
		dataInput = document.getElementById("dataEntry").value;
	}
}

function addValue(){
	updateValue();
	valueAdded = Number(dataInput);
	console.log(valueAdded);
	if(isNaN(dataInput)){
		alert("Invalid data, try again with a number");
	}
	else{
		dataset.push(Number(dataInput));	
	}
	document.getElementById("datasetDisplay").innerHTML = dataset;
	meanCalc();
	document.getElementById("meanDisplay").innerHTML = meanCalc(dataset);
}

function removeValue(){
	updateValue();
	valueRemoved = Number(dataInput);
	console.log(valueRemoved);
	if(isNaN(valueRemoved)){
		alert("Invalid data, try again with a number");
	}
	else{
		dataset.splice(dataset.indexOf(dataInput),1);
	}
	document.getElementById("datasetDisplay").innerHTML = dataset;
	meanCalc();
	document.getElementById("meanDisplay").innerHTML = meanCalc(dataset);
}

function meanCalc(){
	let sum = 0;
	let mean = 0;
	for(let i =0; i < dataset.length; i++){
		sum += parseInt(dataset[i]);
	}
	mean = sum/dataset.length;
	return mean;
}
