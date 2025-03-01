function findDOMLevel() {
	let element = document.querySelector("#level");

	if(!element){
		alert("No element with level id found");
		return;
	}
	let level =1;
	while(element.parentElement){
		element = element.parentElement;
		level++
	}
	alert(`The level of the element is: ${level}`)
}