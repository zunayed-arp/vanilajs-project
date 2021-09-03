let count = 0;

const countText = document.getElementById('count');
console.log(countText)

const increaseCount = () => {

	count += 1;
	// newCount = count
	console.log(count)
	countText.innerText = count;
}

const decreaseCount = () => {
	if (count > 0) {
		count -= 1
		countText.innerText = count;
	}
}

