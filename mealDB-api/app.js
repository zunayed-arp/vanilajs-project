

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
	.then(res => res.json())
	.then(data => console.log(data.meals[0]))


const getInput = () => {
	const inputFieldText = document.getElementById('search-field');
	const searchVal = inputFieldText.value;
	inputFieldText.value = ''
	// console.log(searchVal)
	fetchMealData(searchVal);
}

const fetchMealData = searchedMeal => {
	// console.log(searchedMeal)
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`)
		.then(res => res.json())
		.then(data => showMeals(data.meals))
	// .then(data=>console.log(data))

}

const showMeals = data => {
	console.log(data);

	const div = document.getElementById('card');

	data.forEach(meal => {
		div.innerHTML = `
			<div class="card h-100">
					<img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
							content.
							This content is a little bit longer.</p>
					</div>
					<div class="card-footer">
						<small class="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>

		`
	});

	




}