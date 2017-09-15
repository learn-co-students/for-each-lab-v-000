function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var sampleArray = ['0','1']
  sampleArray.forEach(callback)
  return sampleArray
}

function doToArray(array, callback){
  array.forEach(callback)
}
