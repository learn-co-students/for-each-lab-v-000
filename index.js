function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const football = ['Redskins, Cowboys, Giants, Eagles']

  football.forEach(callback)

  return football
}

function doToArray(array, callback) {
  array.forEach(callback)
}
