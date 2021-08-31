const fetchData = () => {
	fetch('https://api.kanye.rest').then(res => res.json()).then(data => showQuote(data.quote))
}

// fetchData();


const showQuote = (quote) => {
	console.log(quote)
	const div = document.getElementById('show-container');

	div.innerHTML = `
	<blockquote class="fw-bold fs-6 w-auto">"${quote}" <br class="align-content-end"> --Honourable Kanye West</blockquote>
	`
	


}
