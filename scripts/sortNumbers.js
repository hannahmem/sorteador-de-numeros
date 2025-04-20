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

	const notUniqueArr = []

	for (let i = 0; i < num; i++) {
		notUniqueArr.push(Math.floor(Math.random() * (interval2Floored - interval1Ceiled + 1) + interval1Ceiled))
	}

	return notUniqueArr
}

const sortUniqueNum = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value
	const interval1Ceiled = Math.ceil(interval1)
	const interval2Floored = Math.floor(interval2)

	if (interval2Floored - interval1Ceiled + 1 < num) {
		alert("Intervalo muito pequeno. Tente novamente!")
		return false
	} 

	const numSet = new Set()

	while (numSet.size < num) {
		const arrUnique = (Math.floor(Math.random() * (interval2Floored - interval1Ceiled + 1) + interval1Ceiled))
		numSet.add(arrUnique)
	}

	return Array.from(numSet)
}

export { sortNum, sortUniqueNum }