const inputNum = document.querySelector('#number')
const inputInterval1 = document.querySelector('#interval1')
const inputInterval2 = document.querySelector('#interval2')

const sortNum = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value
	const interval1Ceiled = Math.ceil(interval1)
	const interval2Floored = Math.floor(interval2)

	if (interval2Floored - interval1Ceiled + 1 < num) {
		alert("Intervalo muito pequeno. Tente novamente!")
		return false
	}

	const tempArr = []
	const notUniqueArr = []

	for (let i = 0; i < num; i++) {
		const randomNum = Math.floor(Math.random() * (interval2Floored - interval1Ceiled + 1) + interval1Ceiled)
		tempArr.push(randomNum)
		
	}

	tempArr.forEach((num, index) => {
		const numbers = document.createElement('span')
		numbers.classList.add('numbers')
		numbers.textContent = num

		const baseDelay = animationDelay(tempArr.length, index);
		numbers.style.setProperty('--text-delay', `${baseDelay + .5}s`);
        numbers.style.setProperty('--color-delay', `${baseDelay + 1.5}s`);
        numbers.style.setProperty('--bg-scale-delay', `${baseDelay}s`);
        numbers.style.setProperty('--bg-reverse-delay', `${baseDelay + 1.5}s`);
        numbers.style.setProperty('--bg-rotate-delay', `${baseDelay + 0.5}s`);
		notUniqueArr.push(numbers)
	})

	return notUniqueArr
}

const sortUniqueNum = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value

	const min = Math.ceil(interval1)
	const max = Math.floor(interval2)

	if (max - min + 1 < num) {
		alert("Intervalo muito pequeno. Tente novamente!")
		return false
	} 

	const numSet = new Set()
	
	while (numSet.size < num) {
		const arrUnique = (Math.floor(Math.random() * (max - min + 1) + min))
		numSet.add(arrUnique)
	}
	
	const numberSpans = []
	const numbersArray = Array.from(numSet)
	
	numbersArray.forEach((num, index) => {
		const numbers = document.createElement('span')
		numbers.classList.add('numbers')
		numbers.textContent = num

		const baseDelay = animationDelay(numbersArray.length, index);
		numbers.style.setProperty('--text-delay', `${baseDelay + .5}s`);
        numbers.style.setProperty('--color-delay', `${baseDelay + 1.5}s`);
        numbers.style.setProperty('--bg-scale-delay', `${baseDelay}s`);
        numbers.style.setProperty('--bg-reverse-delay', `${baseDelay + 1.5}s`);
        numbers.style.setProperty('--bg-rotate-delay', `${baseDelay + 0.5}s`);
		numberSpans.push(numbers)
	})

	return numberSpans
}

const animationDelay = (quantity, index) => {
	switch (true) {
		case quantity <= 10:
			return index * 0.6
		case quantity <= 20:
			return index * 0.5
		default:
			return index * 0.3
	}
}

export { sortNum, sortUniqueNum }