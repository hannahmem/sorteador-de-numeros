import { sortNum, sortUniqueNum } from "./sortNumbers.js"
import { inputErrorCheck } from "./validateInputs.js"

const aside = document.querySelector('aside')
const firstAside = document.querySelector('#first-aside')
const btn = document.querySelector('button')
const checked = document.querySelector('#no-repeat')

btn.addEventListener("click", () => { 
	const invalidInputCheck = inputErrorCheck()
	if (invalidInputCheck === false) {
		return
	}

	const validateSortNums = sortNum()
	if (!validateSortNums) {
		return
	}

	firstAside.classList.add('hidden')
	addSortedNumbers()
	document.querySelector('#second-aside').classList.remove('hidden')
})

const setupReplayButton = () => {
	const replayBtn = document.getElementById('replay-btn')
	if (replayBtn) {
		replayBtn.addEventListener('click', () => {
			firstAside.classList.remove('hidden')
			document.querySelector('#second-aside').classList.add('hidden')
		})
	}
}

const showResultDisplay = () => {
	const divContainer = document.createElement('div')
	const title = document.createElement('h2')
	const firstResult = document.createElement('span')
	const sortedNumbers = document.createElement('div')
	const replayBtn = document.createElement('button')
	const replayIcon = document.createElement('img')

	divContainer.setAttribute('id', 'second-aside')
	firstResult.classList.add('overline')
	firstResult.textContent = `1º resultado`
	sortedNumbers.classList.add('sorted-numbers')
	replayBtn.setAttribute('type', 'button')
	replayBtn.setAttribute('id', 'replay-btn')
	replayIcon.setAttribute('src', 'assets/icons/replay.svg')
	replayIcon.setAttribute('id', 'replayIcon')
	
	title.textContent = 'resultado do sorteio'
	replayBtn.textContent = 'Sortear novamente'

	aside.appendChild(divContainer)
	divContainer.append(title, firstResult, sortedNumbers, replayBtn)
	replayBtn.appendChild(replayIcon)
	
	setupReplayButton()

	return document.querySelector('#second-aside')
}
	
const addSortedNumbers = () => {
	const aside = document.querySelector('#second-aside')
	if (!aside) {
		showResultDisplay()
	}

	const sortedNumbersContainer = document.querySelector('.sorted-numbers')
	sortedNumbersContainer.innerHTML = ''

	let numbersSpans

	if (checked.checked) {
		numbersSpans = sortUniqueNum()
	} else {
		numbersSpans = sortNum()
	}

	numbersSpans.forEach(span => {
		sortedNumbersContainer.appendChild(span)
	})
}