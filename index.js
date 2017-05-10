function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const adlibs = ["shoo", "bee", "doo", "wop", "dee", "bop"]
  adlibs.forEach(callback)
  return adlibs
}

function doToArray(array, callback){
  array.forEach(callback)
}
