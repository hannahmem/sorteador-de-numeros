import { sortNum, sortUniqueNum } from "./sortNumbers.js"
import { inputErrorCheck } from "./validateInputs.js"

const btn = document.querySelector('button')
const checked = document.querySelector('#no-repeat')

btn.addEventListener("click", () => { 
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

