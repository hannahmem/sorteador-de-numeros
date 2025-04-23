import { sortNum, sortUniqueNum } from './sortNumbers.js';
import { inputErrorCheck } from './validateInputs.js';

// const inputNum = document.querySelector('#number');
// const inputInterval1 = document.querySelector('#interval1');
// const inputInterval2 = document.querySelector('#interval2');
const aside = document.querySelector('aside');
const btn = document.querySelector('button');
const checked = document.querySelector('#no-repeat');
const firstAside = document.querySelector('#first-aside');

let secondAside;

const setupReplayButton = () => {
	const replayBtn = document.getElementById('replay-btn');
	if (replayBtn) {
		replayBtn.addEventListener('click', () => {
			incrementResultCount();
			calculateResult();
		});
	}
};

const incrementResultCount = () => {
	const resultSpan = document.querySelector('.overline');
	const resultCount = parseInt(resultSpan.textContent);
	resultSpan.textContent = `${resultCount + 1}º resultado`;
};

const setupBackButton = () => {
	const backBtn = document.getElementById('back-btn');
	if (!backBtn) return;

	backBtn.addEventListener('click', () => {
		console.log('clicked back btn');

		firstAside.classList.remove('hidden');
		secondAside.classList.add('hidden');
	});
};

const initializeResultDisplay = () => {
	secondAside = document.createElement('div');
	const title = document.createElement('h2');
	const resultCount = document.createElement('span');
	const sortedNumbers = document.createElement('div');
	const replayBtn = document.createElement('button');
	const backBtn = document.createElement('button');
	const replayIcon = document.createElement('img');
	const backIcon = document.createElement('img');

	secondAside.setAttribute('id', 'second-aside');
	resultCount.classList.add('overline');
	sortedNumbers.classList.add('sorted-numbers');
	replayBtn.setAttribute('type', 'button');
	replayBtn.setAttribute('id', 'replay-btn');
	replayIcon.setAttribute('src', 'assets/icons/replay.svg');

	backBtn.setAttribute('type', 'button');
	backBtn.setAttribute('id', 'back-btn');
	backIcon.setAttribute('src', 'assets/icons/arrow.svg');

	title.textContent = 'resultado do sorteio';
	resultCount.textContent = '0º resultado';
	replayBtn.textContent = 'Sortear novamente';
	backBtn.textContent = 'Voltar';

	aside.appendChild(secondAside);
	secondAside.append(title, resultCount, sortedNumbers, replayBtn, backBtn);
	replayBtn.appendChild(replayIcon);
	backBtn.prepend(backIcon);

	secondAside.classList.add('hidden');

	setupReplayButton();
	setupBackButton();
};

const calculateResult = () => {
	const sortedNumbersContainer = document.querySelector('.sorted-numbers');

	if (checked.checked) {
		sortedNumbersContainer.innerHTML = sortUniqueNum();
	} else {
		sortedNumbersContainer.innerHTML = sortNum();
	}
};

const handleUserClick = () => {
	const invalidInputCheck = inputErrorCheck();
	if (invalidInputCheck === false) {
		return;
	}

	const isSuccess = sortNum();
	if (!isSuccess) {
		return;
	}

	incrementResultCount();
	calculateResult();

	firstAside.classList.add('hidden');
	secondAside.classList.remove('hidden');
};

initializeResultDisplay();
btn.addEventListener('click', handleUserClick);
