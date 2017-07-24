function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const dogs = ["dog1", "dog2", "dog3"]

  dogs.forEach(callback)

  return dogs
}

function doToArray(array, callback){
	array.forEach(callback)
}