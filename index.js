function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const games = ["Witcher", "Mario Kart", "Zelda"]

  games.forEach(callback)
  return games
}

function doToArray(array, callback) {
  array.forEach(callback)
}
