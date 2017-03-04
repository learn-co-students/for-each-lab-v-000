function iterativeLog(array){
	array.forEach((element, index) => { console.log(`${index}: ${element}`)
})
}

function iterate(callback){
	var arr = [2, 4, 6, 8, 10];
	arr.forEach(callback);
	return arr;
}

function doToArray(array, callback){
	array.forEach(callback);
}