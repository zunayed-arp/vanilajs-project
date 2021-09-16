let index = 0;




function changeColors(){
	let colors=["red","black","blue","green","orange","gold","goldenrod","purple","green","yellow green"];
	console.log(index)

	document.getElementsByTagName("body")[0].style.background =colors[index++]
	if(index>colors.length-1){
		index=0;
	}
}