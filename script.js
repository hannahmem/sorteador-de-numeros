const form = document.querySelector('form')
const inputNum = document.querySelector('#number')
const inputInterval1 = document.querySelector('#interval1')
const inputInterval2 = document.querySelector('#interval2')
const btn = document.querySelector('button')
const checked = document.querySelector('#no-repeat')
const small = document.querySelector('small')
const inputBorder = document.querySelectorAll('div.input-border')

btn.addEventListener("click", (event) => { 
	event.preventDefault()

	const invalidInputCheck = inputErrorCheck()
	if (invalidInputCheck === false) {
		return false
	} else {
		const result = sortNum()
		console.log(result)
		
		const resultUnique = sortUniqueNum()
		console.log(resultUnique)
	}
})  

const sortNum = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value
	const interval1Ceiled = Math.ceil(interval1)
	const interval2Floored = Math.floor(interval2)

	const result = []

	for (let i = 0; i < num; i++) {
		result.push(Math.floor(Math.random() * (interval2Floored - interval1Ceiled + 1) + interval1Ceiled))
	}

	return result
}

const sortUniqueNum = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value
	const interval1Ceiled = Math.ceil(interval1)
	const interval2Floored = Math.floor(interval2)

	if (interval2Floored - interval1Ceiled + 1 < num) {
		alert("Intervalo muito pequeno. Tente novamente!")
		return
	} 

	const numSet = new Set()

	while (numSet.size < num) {
		const arrUnique = (Math.floor(Math.random() * (interval2Floored - interval1Ceiled + 1) + interval1Ceiled))
		numSet.add(arrUnique)
	}

	return Array.from(numSet)
}

const inputValidation = () => {
	const inputs = [inputNum, inputInterval1, inputInterval2]

	inputs.forEach(input => {
		input.addEventListener('input', function() {
			this.classList.remove('error-border')
			
			const allValid = inputs.every(input => input.value.trim() !== '')
	
			if (allValid) small.classList.remove('errorMessage')
		})	
	})
}

const inputErrorCheck = () => {
	const num = inputNum.value.trim()
	const interval1 = inputInterval1.value.trim()
	const interval2 = inputInterval2.value.trim()
	const inputs = [inputNum, inputInterval1, inputInterval2]

	if (num === '' || interval1 === '' || interval2 === '') {
		alert("Por favor, preencher os campos obrigatórios")
		small.classList.add('errorMessage')
		inputs.forEach(input => {
			input.classList.add('error-border')
		})
		
		return false

	} else {
		small.classList.remove('errorMessage')
		inputs.forEach(input => {
			input.classList.remove('error-border')
		})

		return true
	}
}

inputValidation()