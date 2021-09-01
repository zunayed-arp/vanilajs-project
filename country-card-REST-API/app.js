fetch(`https://restcountries.eu/rest/v2/name/india`)
	.then(res => res.json())
	.then(data => console.log(data))




const getInputData =()=>{
	console.log("hello")

	const inputText = document.getElementById('input')
	const inputVal = inputText.value;

	inputText.value = '';

	// console.log(inputVal)
	fetchData(inputVal);
}
// getInputData();

const fetchData = (searchedText) => {
	// console.log(data)
	fetch(`https://restcountries.eu/rest/v2/name/${searchedText}`)
	.then(res=>res.json())
	.then(data=>showData(data[0]))


}

const showData=(countries)=>{
	console.log(countries)

	const div = document.getElementById('card')
	
		
		div.innerHTML = `
			<img src="${countries.flag}" class="card-img-top" alt="...">
				<div id="card-text" class="card-body">
					<h5 class="card-title">${countries.name}</h5>
				<ol>
				<li><b>Capital:</b> ${countries.capital}</li>
				<li><b>Language:</b> ${countries.languages[0].name}</li>
				<li><b>Currency & Symbol</b>: ${countries.currencies[0].symbol} ${countries.currencies[0].code}</li>
				<li><b>Region:</b> ${countries.region}</li>
				</ol>

				</div>
		
		`
	
}