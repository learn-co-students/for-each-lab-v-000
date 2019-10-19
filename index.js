function iterativeLog(array) {
  array.forEach((element, index) => {
     console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  const fruit = ['apple', 'banana', 'orange']

  fruit.forEach(callback)

  return fruit

}


function doToArray(array, callback) {
  array.forEach(callback)
}