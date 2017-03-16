function iterativeLog(array){
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}

function iterate(callback){
	const fruit = ["banana", "apple", "plum"]

	fruit.forEach(callback)

	return fruit
}

function doToArray(array, callback){
	array.forEach(callback)
}


