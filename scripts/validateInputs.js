const small = document.querySelector('small')
const inputNum = document.querySelector('#number')
const inputInterval1 = document.querySelector('#interval1')
const inputInterval2 = document.querySelector('#interval2')

const inputValidation = () => {
	const inputs = [inputNum, inputInterval1, inputInterval2]
	const regex = /[^0-9]/

	inputs.forEach(input => {
		input.addEventListener('input', function() {
			this.value = this.value.replace(regex, '')

			this.classList.remove('error-border')
			
			const allValid = inputs.every(input => input.value.trim() !== '')
			if (allValid) small.classList.remove('errorMessage')
		})
	})
}

inputValidation()

export const inputErrorCheck = () => {
	const num = inputNum.value
	const interval1 = inputInterval1.value
	const interval2 = inputInterval2.value
	const inputs = [inputNum, inputInterval1, inputInterval2]

	if (num === '' || interval1 === '' || interval2 === '') {
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