
function generate() {

	const quotes = {
		"-Ally Carter": '"Insane means fewer cameras!"',
		"― C.JoyBell C.": `“I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.”`,

		"― J.R.Ward, Crave":`“That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.”`
	}

	const authors = Object.keys(quotes);
	// const quotesList = Object.values(quotes);
	// console.log(authors)

	const author = authors[Math.floor(Math.random() * authors.length)];
	// console.log(author)

 const quote = quotes[author];
	// console.log(quote)

	document.getElementById('quote').innerHTML = quote;
	document.getElementById('author').innerHTML = author;

}













