fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&APPID=7067467032ca1cdebb6937d70a4f9721`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})



const getInput =()=>{
	const inputText = document.getElementById('set-input');
	const inputVal = inputText.value;
	inputText.value = '';
	console.log(inputVal);
	fetchData(inputVal);
	
}


const API_KEY = "";
const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7067467032ca1cdebb6937d70a4f9721"


const fetchData = (data) =>{
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data},${data}&APPID=7067467032ca1cdebb6937d70a4f9721`)
	.then(res=>res.json())
	.then(data=>showWeatherInformation(data))
}





const showWeatherInformation=(data)=>{

	console.log(data)

	const div = document.getElementById('city-zipcode')
	div.innerHTML = `
		<span id="city-name" class="text-4xl font-thin">${data.name}, ${data.sys.country}</span>
		<span  class="hidden sm:inline-block align-bottom text-xs">( ${'1207'} )</span>

		`
	
	const skyDiv = document.getElementById('sky-condition')

	skyDiv.innerHTML = `

	<span class="capitalize">${data.weather[0].description}</span>
		<span class="capitalize">, ${data.weather[1].description}</span>
	`

	const showDiv = document.getElementById('show-temp');

	console.log(typeof data.main.temp)

	showDiv.innerHTML =`

	<span class="text-right text-blue-700 text-4xl">${Math.floor((data.main.temp -273.15)*(9/5)+32)}˚F</span>
				<span class="text-center text-5xl text-white mx-6  font-bold text-6xl">${Math.floor(data.main.temp - 273.15)}˚C</span>
				<span class="text-left">${data.main.temp}K</span>
	`

	const dayDate=document.getElementById('day-date-time');

	dayDate.innerHTML = `
		<span>Longitude: ${data.coord.lon} Latitude:${data.coord.lat}</span>
	`
	
	// eather: Array(2)
	// 0: { id: 721, main: "Haze", description: "haze", icon: "50n" }
	// 1: { id: 500, main: "Rain", description: "light rain", icon: "10n" }






}