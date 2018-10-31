const { addListener, showElement } = require('../js/dom.js')

describe('dropBar', () => {
	test('nav  bar is not showing', () =>{
		//Arrange
		const nav = document.createElement('nav')
		const dropButton = document.createElement('button')
		dropButton.appendChild(nav)
		nav.style.display = 'none'
		addListener(dropButton, 'click', event =>{
			showChildElement(dropButton, 'nav')
		})

		//Act
		dropButton.click()

		//Assert
		expect(nav.style.display).not.toBe('none')

	})
})

describe('project description', () => {
	test('description not showing', () => {
		//arrange
		const description = document.createElement('p')
		const figure = document.createElement('figure')
		description.style.display = 'none'
		figure.appendChild(description)
		addListener(figure, 'click', event => {showChildElement(figure, 'p')})

		//act
		figure.click()

		//assert
		expect(description.style.display).not.toBe('none')
	})
})