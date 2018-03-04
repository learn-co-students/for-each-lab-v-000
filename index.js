var dogs = ['shepherd', 'boxer', 'schnauzser', 'pug'];


function iterativeLog(array) {
	array.forEach(logger);
}

function logger(element, index) {
	console.log(`${index}: ${element}`);
}

function iterate(callback) {
	var pets = ['fish', 'dog', 'cat', 'bird'];
	pets.forEach(callback);
	return pets;
}

function doToArray(array, callback) {
	array.forEach(callback);
}

function rev(arr) {
	let newArr = []
	arr.forEach((element) => newArr.push(element.split('').reverse().join('')))
	return newArr
}