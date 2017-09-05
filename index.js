function iterativeLog(array) {
  array.forEach((element, index)=> {
  console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var games= ["Overwatch", "2K", "DOTA"]

  games.forEach(callback)

  return games
}

function doToArray(array, callback){
  array.forEach(callback)

  return array
}
