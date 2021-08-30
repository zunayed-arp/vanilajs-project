//using event listener
document.getElementById('click-me').addEventListener('click', function () {
	let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	let hexcode = '';


	for (let i = 0; i < 6; i++) {
		let random_index = Math.floor(Math.random() * hex_numbers.length);
	 	console.log(random_index)
		hexcode += hex_numbers[random_index];
		console.log(hexcode);
	}

	document.getElementById('hex-code').innerHTML = hexcode;
	document.getElementsByTagName("body")[0].style.background = "#" + hexcode;

})



/*
function changeColor(){
	// debugger;
	let hex_numbers = ["0","1","2","3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	let hexcode = '';


	for(let i=0; i < 6; i++){
		let random_index = Math.floor(Math.random() * hex_numbers.length);
		// console.log(random_index)
		hexcode+=hex_numbers[random_index];
		console.log(hexcode);
	}

	document.getElementById('hex-code').innerHTML= hexcode;
	// document.getElementsByTagName("body")[0].style.background = "#" + hexcode;


} */