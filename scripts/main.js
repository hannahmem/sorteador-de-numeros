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

	firstAside.classList.add('hidden')
	addSortedNumbers()
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

const resultDisplay = () => {
	aside.innerHTML = 
		`<div id="second-aside">
			<h2>resultado do sorteio</h2>
			<span class="overline">1º resultado</span>
			<div class="sorted-numbers"></div>
			<button type="button" id="replay-btn">
				Sortear novamente
				<img src="assets/icons/replay.svg" alt="">
			</button>
		</div>`	

	setupReplayButton()
	return document.querySelector('.sorted-numbers')
}
	
const addSortedNumbers = () => {
	const aside = document.querySelector('#second-aside')
	if (!aside) {
		resultDisplay()
	}

	const sortedNumbersContainer = document.querySelector('.sorted-numbers')

	if (checked.checked) {
		sortedNumbersContainer.innerHTML = sortUniqueNum()
	} else {
		sortedNumbersContainer.innerHTML = sortNum()
	}
}