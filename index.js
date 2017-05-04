function iterativeLog(array){
  array.forEach((element, index) => {
  	console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  myArray = ["You", "aint", "seen"]
  myArray.forEach(callback)
  return myArray
}

function doToArray(array, callback){
  array.forEach(callback)
}