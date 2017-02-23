function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const states = ['New York', 'Hawaii', 'Alaska']

  states.forEach(callback)

  return states
}

function doToArray(array, callback) {
  array.forEach(callback)
}
