function iterativeLog(array) {
	array.forEach((el, i) => {
		console.log(`${i}: ${el}`)
	})
}

function iterate(callback) {
	const dogs = ['spot', 'fido', 'steve']
	
	dogs.forEach(callback)

	return dogs
}

function doToArray(array, callback) {
	array.forEach(callback)
}