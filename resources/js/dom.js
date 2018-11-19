const slides = document.querySelectorAll('.project_item')
const dots = document.querySelectorAll('.dot')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let slideIndex = 0;

const descriptions = document.querySelectorAll('#project-description')
const nav = document.querySelector('#main-nav')

const modalButton = document.querySelector('#h2')
const modal = document.querySelector('#modal')
const aboutMe = document.querySelector('#modal p')



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

function showSlides(n) {
	let i = 0;
	if (n > slides.length) {n = 0} //loop to first
  	if (n < 1) {n = slides.length} //loop to last
  	for (i = 0; i < slides.length; i++) { //make all not show
      slides[i].style.display = 'none'; 
  	}
  	slides[n-1].style.display = 'block';
}

function dotPages(dot, project,i) {
	addListener(dot, 'click', event => {
		console.log(project)
		showSlides(i)
	})
}

function dotsToSlides(){
	for (let k = 0; k < dots.length; k++) {
      dotPages(dots[k], slides[k], k)
    }
}

function changeSlides(button, n) {
	button.addEventListener('click', event => slideIndex += n)
	addListener(button, 'click', event => slideIndex += n)
}

function slideDescriptionListeners(slides, descriptions) {
	for(i = 0; i < slides.length; i++){
		console.log(descriptions[i])
		addListener(slides[i], 'mouseover', event => toggleShowElement(descriptions[i]))
	}
}

function  modalOn() {
	addListener(modalButton, 'click', event =>{
		if (event.target !== aboutMe){
			toggleShowElement(modal)
		}
	})
}

module.exports = {
	addListener,
	toggleShowElement,
	dotPages
}