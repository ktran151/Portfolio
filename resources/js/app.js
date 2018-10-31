
main()

function main() {


	//nav drop menu
	addListener(dropbutton, 'click', event => {
		toggleShowElement(nav)
	})

	//carousel
	dotsToSlides();
	showSlides(slideIndex);
	// changeSlides('#prev', -1);
	// changeSlides('#next', 1);
	// const aboutPopup = document.querySelector('')

	//project description
	slideDescriptionListeners(slides, descriptions);

}

