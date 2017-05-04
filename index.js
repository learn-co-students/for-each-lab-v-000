function iterativeLog(array){
  array.forEach((elt,index) => {
    console.log(`${index}: ${elt}`)
  })  
}

function iterate(callback){
  var array = [1,2,3]
  array.forEach((elt,index,array) => {
    array[index] = callback(elt)
  })
  return array
}

function doToArray(array, callback){
  array.forEach((elt,index,array) => {
    array[index] = callback(elt)
  })
  return array
}
