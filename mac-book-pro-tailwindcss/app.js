//memroy section
const eightGbMemory = getItem('8gb-memory');
const sixteenGbMemory = getItem("16gb-memory");

//storage section
const storage256Gb = getItem("256gb-storage");
const storage512Gb = getItem("512gb-storage");
const storage1Tb = getItem("1tb-storage");

// Price section
const bestPrice = getItem("best-price");
const extraMemoryPrice = getItem("extra-memory");
const extraStoragePrice = getItem("extra-storage");
const deliveryCharge = getItem("delivery");
const totalPrice = getItem("total")

//promo price after  code applied
const totalAfterPromo = getItem("total-after-promo");

//shipping section
const freeDelivery = getItem("free-delivery");
const expressDelivery = getItem("express-delivery");

//promocode //stevekaku //promo button
const promoInput = getItem("promo");
const applyButton = getItem("apply-button");


//memory //event listener section
eightGbMemory.addEventListener('click', function () {
	setPrice(extraMemoryPrice, 0);
	calculateTotal();
});

sixteenGbMemory.addEventListener('click', function () {
	setPrice(extraMemoryPrice, 180);
	calculateTotal();
});
//storage
storage256Gb.addEventListener('click', function () {
	setPrice(extraStoragePrice, 0);
	calculateTotal();
});

storage512Gb.addEventListener('click', function () {
	setPrice(extraStoragePrice, 100)
	calculateTotal();
});
storage1Tb.addEventListener('click', function () {
	setPrice(extraStoragePrice, 180)
	calculateTotal();
});

//shipping options
freeDelivery.addEventListener('click', function () {
	setPrice(deliveryCharge, 0);
	calculateTotal();
});
expressDelivery.addEventListener('click', function () {
	setPrice(deliveryCharge, 20);
	calculateTotal();
});



// get item function
function getItem(inputId) {
	const itemInput = document.getElementById(inputId);
	return itemInput;
}

// set item price function
function setPrice(element, inputPrice) {
	element.innerText = inputPrice;
};

//update products price

function calculateTotal() {
	const grandTotal = parseFloat(bestPrice.innerText) + parseFloat(extraMemoryPrice.innerText) + parseFloat(extraStoragePrice.innerText) + parseFloat(deliveryCharge.innerText);
	totalPrice.innerText = grandTotal;
	totalAfterPromo.innerText = grandTotal;
	promoCode();
};




//promo input field
function promoCode(){
	const discount =  promoInput.value
	promoInput.value = '';
	if(discount == 'stevekaku'){
		return true;
	}
	else{
		return false;
	}
}



//promo code applied
applyButton.addEventListener('click',function(){
	const promoApplied = promoCode();
	const totalPriceFromTable = parseFloat(document.getElementById('total').innerText);

	console.log(totalPriceFromTable);
	if(promoApplied == true){
		const totalPriceAfterPromo = totalPriceFromTable *0.2;
		const finalPrice = totalPriceFromTable - totalPriceAfterPromo;
		document.getElementById('total-after-promo').innerText = finalPrice;
	}
	else{
		document.getElementById('total-after-promo').innerText = totalPriceFromTable;
	}

})

















































