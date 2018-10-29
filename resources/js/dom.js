
function addListener(element, eventType, callback){
	element.addEventListener(eventType, callback)
}

function toggleShowElement(elem) {
	if (elem.style.display === 'block') {
		elem.style.display = 'none'
	} else {
		elem.style.display = 'block'
	}
}

// function showChildElement(element, childElement){
// 	toggleShowElement(element.querySelector(childElement))
// }

module.exports = {
	addListener,
	showChildElement,
	toggleShowElement
}