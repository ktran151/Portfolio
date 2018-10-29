let slideIndex = 1;

main()

function main() {

	const dropButton = document.querySelector('#dropbutton')
	const nav = document.querySelector('#main-nav')
	addListener(dropbutton, 'click', event => {
		toggleShowElement(nav)
	})



// const aboutPopup = document.querySelector('')



}

function showSlides(n) {
	let i = 0;
	const slides = document.querySelectorAll('.project_item')
	const dots = document.querySelectorAll('dot')
	slides.forEach(slide => {
		i++;
	})
}