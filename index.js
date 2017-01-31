var iterativeLog = (array) => {
  array.forEach((obj, index, array) => console.log(`${index}: ${array[index]}`))
}

var iterate = (callback) => {
  var array = new Array({Apple: 'Steve Jobs'})
  array.forEach(callback)
  return array
}

var doToArray = (array, callback) => {
  array.forEach(callback)
}
